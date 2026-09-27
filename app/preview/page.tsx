import { Reveal } from '@/components/effects/reveal';
import { SideCardsReveal } from '@/components/effects/side-cards-reveal';
import { GradientBlobCard } from '@/components/effects/gradient-blob-card';

const give = [
  'API docs or SDK access for the product you want tested',
  'A short brief defining what "success" looks like for a candidate',
  'Sandbox credentials or test environment access',
  'Optional logging preferences (e.g., rate limits, error categories)',
];

const happens = [
  'We design a live challenge around your product',
  'Developers integrate your API/SDK under a real deadline',
  'Every API call, error, retry, and friction point is logged',
  'The AI Judge evaluates each submission in real time',
];

const weTrack = [
  'Time to first successful call',
  'Abandonment points',
  'Error frequency',
  'Integration patterns',
  'Documentation confusion',
  'Workarounds and hacks',
];

const frictionReportRows = [
  { metric: 'Time to first successful API call', result: '14 min', target: '<5 min', notes: 'Most delays caused by unclear auth setup' },
  { metric: 'Most common blocker', result: 'Auth token setup', target: '—', notes: 'Developers misinterpreted the token refresh flow' },
  { metric: 'Docs clarity score', result: '6.2 / 10', target: '—', notes: 'Missing examples for error handling' },
  { metric: 'Error frequency', result: '3.1 errors per dev', target: '—', notes: 'Mostly 401/403 due to token confusion' },
  { metric: 'Abandonment rate', result: '3 of 22 developers', target: '—', notes: 'All three cited unclear onboarding steps' },
  { metric: 'Average integration time', result: '41 min', target: '—', notes: 'Longer than expected for a simple CRUD API' },
  { metric: 'Most common workaround', result: 'Manual token injection', target: '—', notes: 'Indicates missing helper functions in SDK' },
];

const sampleCandidate = [
  { label: 'Overall score', value: '91 / 100' },
  { label: 'Correctness', value: 'Passed all functional tests' },
  { label: 'Architecture review', value: 'Clean separation of concerns; minor over-fetching' },
  { label: 'Tool usage', value: 'Used SDK correctly with no workarounds' },
  { label: 'Debugging behavior', value: 'Fast iteration, consistent logging, minimal retries' },
  { label: 'Stack match', value: 'Strong — ideal for backend or platform roles' },
  { label: 'Recommended next step', value: 'Fast-track to technical interview' },
  { label: 'Additional notes', value: 'Demonstrated strong API comprehension and error handling' },
];

export default function PreviewPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <Reveal direction="up">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            What a sponsorship actually looks like
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            A walkthrough of what you hand us, what happens during the
            competition, and the output you receive. The sample data below
            is illustrative, not from a real event.
          </p>
        </div>
      </Reveal>

      <div className="mt-16">
        <SideCardsReveal
          left={
            <GradientBlobCard theme="purple" className="min-h-[340px]">
              <h2 className="text-2xl font-semibold md:text-3xl">What you give us</h2>
              <ul className="mt-4 space-y-2">
                {give.map((g) => (
                  <li key={g} className="flex gap-3 text-sm text-white/85 md:text-base">
                    <span>•</span>
                    {g}
                  </li>
                ))}
              </ul>
            </GradientBlobCard>
          }
          right={
            <GradientBlobCard theme="teal" className="min-h-[340px]">
              <h2 className="text-2xl font-semibold md:text-3xl">What happens during the event</h2>
              <ul className="mt-4 space-y-2">
                {happens.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-white/85 md:text-base">
                    <span>•</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-white/20 pt-6">
                <div className="text-sm font-medium">We track:</div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {weTrack.map((t) => (
                    <li key={t} className="flex gap-2 text-sm text-white/85">
                      <span>•</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </GradientBlobCard>
          }
        />
      </div>

      <Reveal direction="up" className="mt-6">
        <GradientBlobCard theme="light" className="items-center text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">What you get</h2>
          <p className="mt-2 text-sm text-[#141414]/70 md:text-base">
            A DX friction report and ranked candidate scorecards — samples below.
          </p>
        </GradientBlobCard>
      </Reveal>

      <Reveal direction="up" className="mt-14">
        <div className="text-xs font-medium uppercase tracking-wide text-primary">
          Sample — DX friction report
        </div>
        <h3 className="mt-2 text-2xl font-medium md:text-3xl">Example Co. API integration</h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-border/60">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-panel/60 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-4 py-3 font-medium">Metric</th>
                <th className="px-4 py-3 font-medium">Result</th>
                <th className="px-4 py-3 font-medium">Target</th>
                <th className="px-4 py-3 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {frictionReportRows.map((row) => (
                <tr key={row.metric} className="border-b border-border/60 last:border-0">
                  <td className="px-4 py-3 font-medium">{row.metric}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.result}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.target}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal direction="up" className="mt-14">
        <div className="text-xs font-medium uppercase tracking-wide text-primary">
          Sample — candidate scorecard
        </div>
        <h3 className="mt-2 text-2xl font-medium md:text-3xl">Anonymized submission #14</h3>
        <div className="mt-4 rounded-[28px] bg-panel p-8">
          <dl className="grid gap-6 sm:grid-cols-2">
            {sampleCandidate.map((row) => (
              <div key={row.label}>
                <dt className="text-xs text-muted-foreground">{row.label}</dt>
                <dd className="mt-1 text-sm font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      <Reveal direction="up" className="mt-16 text-center">
        <a
          href="/contact"
          className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
        >
          Get in touch to sponsor a competition
        </a>
      </Reveal>
    </div>
  );
}