export function Footer() {
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Rishaan Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
