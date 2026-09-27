import { Reveal } from '@/components/effects/reveal';
import { PagedStack } from '@/components/effects/paged-stack';
import { GradientBlobCard, cardThemes, type CardTheme } from '@/components/effects/gradient-blob-card';
import { ScrollCardStack } from '@/components/effects/scroll-card-stack';

const offerings: { title: string; summary: string; details: string[]; tags: string[]; theme: CardTheme }[] = [
  {
    title: 'AI Judge & Talent Scout Engine',
    summary:
      "Our proprietary AI/LLM evaluation system scores every code submission during a competition. It doesn't just check correctness — it analyzes how developers build.",
    details: [
      'Objective scorecards — capability profiles based on real behavior, not pass/fail tests',
      'Automated architecture reviews — how each developer structured their solution, not just whether it ran',
      'Skill-to-role matching — recommended roles based on demonstrated competencies, not resume keywords',
      'Behavioral signal — debugging patterns, iteration speed, and problem-solving under pressure',
    ],
    tags: ['AI/LLM', 'Scorecards', 'Architecture Review', 'Behavioral Signal'],
    theme: 'light',
  },
  {
    title: 'B2B API & DX Testing',
    summary:
      "Deploy your API, SDK, or cloud infrastructure into a live Cozy Arena hackathon. Developers integrate your product under real deadline pressure — revealing friction you can't find in synthetic tests.",
    details: [
      'Real-world friction reports — where developers struggle with your API, SDK, or docs',
      'Usability audits — onboarding flow, documentation clarity, error messages, and DX pain points',
      'Structured bug reports — surfaced during real usage, not artificial QA environments',
      'Integration analytics — time to first successful call, abandonment points, retry patterns, and error frequency',
    ],
    tags: ['Friction Reports', 'DX Audits', 'Bug Reports', 'Integration Analytics'],
    theme: 'purple',
  },
  {
    title: 'Technical Talent Pipeline',
    summary:
      'Every developer who competes builds directly on your stack — giving you a shortlist of engineers who have already proven they can work with your tools.',
    details: [
      'Proof-of-concept submissions — every candidate has built something real with your API/SDK',
      'Ranked shortlists — based on AI Judge scorecards, not interview performance',
      'Skip early-stage screening — correctness, architecture, and tool usage are already evaluated',
      'Role-matched candidates — surfaced based on demonstrated strengths',
    ],
    tags: ['Proof-of-Concept', 'Ranked Shortlists', 'Role Matching', 'Recruitment'],
    theme: 'teal',
  },
];

const sponsorSteps = [
  {
    title: 'Scope the test',
    bullets: [
      'The API/SDK you want tested',
      'The workflows you care about',
      'The type of engineer you want surfaced',
    ],
  },
  {
    title: 'We build the challenge',
    bullets: [
      'Realistic integration tasks',
      'Clear success criteria',
      'Constraints that mimic real-world usage',
    ],
  },
  {
    title: 'Developers compete live',
    bullets: [
      'Developers integrate your API/SDK under a deadline',
      'Every API call, error, retry, and friction point is logged',
      'The AI Judge evaluates each submission in real time',
    ],
  },
  {
    title: 'You get both outputs',
    bullets: [
      'A DX friction report for your product team',
      'A ranked candidate shortlist for your hiring team',
      'Full metadata: integration logs, usage analytics, and behavioral signal',
    ],
  },
];

export default function ForSponsorsPage() {
  return (
    <div>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal direction="up">
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Validate your tools. Recruit the engineers who proved it.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              Sponsor a Cozy Arena competition and get real developer-experience
              data and a high-signal hiring pipeline — from the same event.
            </p>
          </div>
        </Reveal>
      </div>

      <div id="offerings" className="scroll-mt-24">
        <PagedStack
          pages={offerings.map((o, i) => (
            <GradientBlobCard key={o.title} theme={o.theme}>
              <div className="flex items-start justify-between">
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{o.title}</h2>
                <span className={`text-lg font-medium ${cardThemes[o.theme].subtext}`}>
                  /{String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className={`mt-4 max-w-2xl ${cardThemes[o.theme].subtext}`}>{o.summary}</p>
              <ul className="mt-6 space-y-3">
                {o.details.map((d) => (
                  <li key={d} className={`flex gap-3 text-sm md:text-base ${cardThemes[o.theme].subtext}`}>
                    <span>✓</span>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {o.tags.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full px-4 py-1.5 text-xs font-medium md:text-sm ${cardThemes[o.theme].pill}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GradientBlobCard>
          ))}
        />
      </div>

      <div id="process" className="scroll-mt-24 bg-overlay-bg">
        <ScrollCardStack
          title="What a typical sponsorship looks like"
          cards={sponsorSteps.map((s, i) => (
            <div key={s.title} className="flex h-full flex-col justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-base font-medium text-primary">
                {i + 1}
              </span>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-4xl">{s.title}</h3>
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-base text-muted-foreground md:text-lg">
                    <span className="text-primary">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <Reveal direction="up">
          <a
            href="/contact"
            className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Talk to us about sponsoring
          </a>
        </Reveal>
      </div>
    </div>
  );
}