export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Red Phanes. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span>Cozy Arena · AI Judge & Talent Scout · DX Testing · Talent Pipeline</span>
          <a href="/privacy" className="hover:text-foreground">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}