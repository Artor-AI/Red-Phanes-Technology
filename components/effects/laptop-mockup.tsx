export function LaptopMockup() {
  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="rounded-t-2xl border-8 border-b-0 border-foreground/80 bg-background p-3">
        <div className="aspect-[16/10] overflow-hidden rounded-lg bg-panel">
          <div className="flex h-full flex-col gap-3 p-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary/50" />
              <span className="h-2 w-2 rounded-full bg-primary/30" />
              <span className="h-2 w-2 rounded-full bg-primary/20" />
            </div>
            <div className="rounded-lg bg-accent-soft p-3">
              <div className="text-[10px] text-muted-foreground">DX Friction Report</div>
              <div className="mt-2 h-1.5 w-3/4 rounded-full bg-primary/40" />
              <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-primary/25" />
            </div>
            <div className="grid flex-1 grid-cols-2 gap-2">
              <div className="rounded-lg bg-accent-soft p-2">
                <div className="text-[9px] text-muted-foreground">Score</div>
                <div className="mt-1 text-lg font-semibold text-primary">91</div>
              </div>
              <div className="rounded-lg bg-accent-soft p-2">
                <div className="text-[9px] text-muted-foreground">Errors</div>
                <div className="mt-1 text-lg font-semibold text-primary">3.1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-3 w-[110%] max-w-none -translate-x-[5%] rounded-b-xl bg-foreground/80" />
      <div className="mx-auto h-1 w-1/4 rounded-b-full bg-foreground/60" />
    </div>
  );
}