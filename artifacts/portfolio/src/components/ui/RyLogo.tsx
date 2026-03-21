import { useEffect, useRef } from "react";

/**
 * Renders the portfolio "Ry" logo using canvas so it behaves more like a designed logo
 * (cropped tightly + added glow) instead of a raw scaled image.
 */
export function RyLogo({ heightPx = 38 }: { heightPx?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/assets/img/logo-ry.png";

    img.onload = () => {
      const srcW = img.naturalWidth;
      const srcH = img.naturalHeight;

      // Compute an alpha bbox so the rounded rectangle border gets cropped out.
      // Use a smaller "analysis canvas" for speed, then map bbox back to original pixels.
      const analysisW = 256;
      const analysisH = Math.max(1, Math.floor((analysisW / srcW) * srcH));
      const analysis = document.createElement("canvas");
      analysis.width = analysisW;
      analysis.height = analysisH;
      const aCtx = analysis.getContext("2d");
      if (!aCtx) return;

      aCtx.clearRect(0, 0, analysisW, analysisH);
      aCtx.drawImage(img, 0, 0, analysisW, analysisH);
      const imageData = aCtx.getImageData(0, 0, analysisW, analysisH);

      // Find bbox of "real logo pixels".
      const alphaThreshold = 10; // higher = crop tighter
      let minX = analysisW,
        minY = analysisH,
        maxX = -1,
        maxY = -1;

      const d = imageData.data;
      for (let y = 0; y < analysisH; y++) {
        for (let x = 0; x < analysisW; x++) {
          const i = (y * analysisW + x) * 4;
          const a = d[i + 3];
          if (a > alphaThreshold) {
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
          }
        }
      }

      if (maxX < 0 || maxY < 0) return;

      // Map bbox to source space.
      const scaleX = srcW / analysisW;
      const scaleY = srcH / analysisH;
      const rawCropX = Math.floor(minX * scaleX);
      const rawCropY = Math.floor(minY * scaleY);
      const rawCropW = Math.ceil((maxX - minX + 1) * scaleX);
      const rawCropH = Math.ceil((maxY - minY + 1) * scaleY);

      // Shrink bbox slightly to remove the outer rounded-rectangle outline.
      const shrink = 0.09;
      const insetX = Math.floor(rawCropW * shrink);
      const insetY = Math.floor(rawCropH * shrink);
      const cropX = rawCropX + insetX;
      const cropY = rawCropY + insetY;
      const cropW = Math.max(1, rawCropW - insetX * 2);
      const cropH = Math.max(1, rawCropH - insetY * 2);

      // Render at 2x then let CSS scale down for crisper edges.
      const scale = 2;
      canvas.width = Math.max(1, Math.floor(cropW * scale));
      canvas.height = Math.max(1, Math.floor(cropH * scale));
      const aspect = canvas.width / Math.max(1, canvas.height);
      canvas.style.height = `${heightPx}px`;
      canvas.style.width = `${Math.round(heightPx * aspect)}px`;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = true;
      // @ts-expect-error - older DOM typings may not expose this in some TS setups.
      ctx.imageSmoothingQuality = "high";

      // Draw only the cropped logo pixels. CSS filter (in the component render) handles the glow.
      ctx.globalAlpha = 1;
      ctx.filter = "none";
      ctx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, canvas.width, canvas.height);
    };
  }, [heightPx]);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Ry logo"
      style={{
        height: `${heightPx}px`,
        display: "block",
        // Match the original logo styling so the canvas-rendered neon reads as a logo.
        filter: "brightness(1.8) contrast(1.2) drop-shadow(0 0 6px rgba(255,255,255,0.4))",
      }}
    />
  );
}

