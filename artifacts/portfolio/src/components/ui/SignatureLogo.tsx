import { useEffect, useRef } from "react";

export function SignatureLogo({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/assets/img/logo-signature.jpeg";

    img.onload = () => {
      const srcW = img.naturalWidth;
      const srcH = img.naturalHeight;

      const cropX = Math.floor(srcW * 0.02);
      const cropY = Math.floor(srcH * 0.62);
      const cropW = Math.floor(srcW * 0.32);
      const cropH = Math.floor(srcH * 0.38);

      const scale = 2;
      canvas.width = cropW * scale;
      canvas.height = cropH * scale;

      ctx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;

      for (let i = 0; i < d.length; i += 4) {
        const r = d[i], g = d[i + 1], b = d[i + 2];
        const brightness = (r + g + b) / 3;
        const threshold = 215;
        if (brightness > threshold) {
          d[i + 3] = 0;
        } else {
          const darkness = threshold - brightness;
          const alpha = Math.min(255, Math.round((darkness / threshold) * 255 * 1.8));
          d[i] = 255;
          d[i + 1] = 255;
          d[i + 2] = 255;
          d[i + 3] = alpha;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ height: "40px", width: "auto" }}
    />
  );
}
