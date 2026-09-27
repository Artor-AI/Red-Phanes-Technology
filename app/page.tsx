import { Reveal } from '@/components/effects/reveal';
import { StepReveal } from '@/components/effects/step-reveal';
import { ScrollExpandPanel } from '@/components/effects/scroll-expand-panel';
import { GlowCard } from '@/components/effects/glow-card';
import { LaptopMockup } from '@/components/effects/laptop-mockup';
import { FocusText } from '@/components/effects/focus-text';
import { SideCardsReveal } from '@/components/effects/side-cards-reveal';
import { GradientBlobCard } from '@/components/effects/gradient-blob-card';
import { TestimonialGrid } from '@/components/sections/testimonial-grid';

const pillars = [
  {
    title: 'Cozy Arena',
    description:
      'Our live hackathon platform where developers and students compete on real problems, submit code, and win prizes.',
    href: '/for-developers',
    linkLabel: 'For developers',
  },
  {
    title: 'AI Judge & Talent Scout Engine',
    description:
      'Every submission is evaluated by our proprietary AI, generating objective capability scorecards and skill matches — not just a leaderboard.',
    href: '/for-sponsors',
    linkLabel: 'For sponsors',
  },
  {
    title: 'B2B API & DX Testing',
    description:
      'Deploy your API, SDK, or infrastructure into a live competition and get real-world friction reports and usability data.',
    href: '/for-sponsors',
    linkLabel: 'For sponsors',
  },
];

const steps = [
  {
    step: 1,
    title: 'You bring the stack',
    description:
      'Sponsors deploy their API, SDK, or cloud infrastructure into a live Cozy Arena competition.',
  },
  {
    step: 2,
    title: 'Developers build live',
    description:
      'Developers compete in real time, integrating your tools under real deadline pressure.',
  },
  {
    step: 3,
    title: 'AI evaluates everything',
    description: 'Our AI Judge scores every submission and logs every friction point.',
  },
  {
    step: 4,
    title: 'You get both outputs',
    description:
      'A DX report for your product team, and a ranked shortlist for your hiring team.',
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-20 text-center">
        <Reveal direction="up">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Validate your dev tools. <br /> Hire the engineers who proved it.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            We run live coding competitions on Cozy Arena, then use our AI
            Judge & Talent Scout Engine to turn code submissions into real
            product feedback and real hiring signal — from the same event.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SideCardsReveal
          left={
            <GradientBlobCard theme="purple" className="min-h-[280px]">
              <h2 className="text-2xl font-semibold md:text-3xl">Sponsor a competition</h2>
              <p className="mt-3 text-white/80">
                Validate your API or SDK under real usage and walk away with a
                ranked hiring shortlist from the same event.
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="/for-sponsors"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-medium text-white"
                >
                  For sponsors →
                </a>
              </div>
            </GradientBlobCard>
          }
          right={
            <GradientBlobCard theme="teal" className="min-h-[280px]">
              <h2 className="text-2xl font-semibold md:text-3xl">Join as a developer</h2>
              <p className="mt-3 text-white/80">
                Compete live, get an AI-scored capability report, and get
                noticed by companies hiring for your stack.
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="/for-developers"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-medium text-white"
                >
                  For developers →
                </a>
              </div>
            </GradientBlobCard>
          }
        />
      </section>

      <section className="pb-16">
        <ScrollExpandPanel />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <LaptopMockup />
          </Reveal>
          <div className="space-y-6">
            <FocusText className="text-2xl font-semibold tracking-tight md:text-3xl">
              Every competition produces a real report.
            </FocusText>
            <FocusText className="text-muted-foreground">
              Not a leaderboard screenshot — an actual DX friction report and
              candidate scorecard, generated automatically as developers
              build.
            </FocusText>
            <FocusText className="text-muted-foreground">
              Scroll this into view and the copy sharpens into focus, the
              same way it would on the report itself.
            </FocusText>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <StepReveal className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <GlowCard key={p.title} className="p-8">
              <h2 className="font-medium">{p.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
              <a
                href={p.href}
                className="mt-4 inline-block text-sm font-medium text-primary underline underline-offset-4"
              >
                {p.linkLabel} →
              </a>
            </GlowCard>
          ))}
        </StepReveal>
      </section>

      <section className="bg-panel/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal direction="up">
            <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
              How it works
            </h2>
          </Reveal>
          <StepReveal className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-sm font-medium text-primary">
                  {s.step}
                </span>
                <h3 className="mt-3 font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </StepReveal>
        </div>
      </section>

      <section className="py-20">
        <Reveal direction="up">
          <p className="mb-6 text-center text-sm text-muted-foreground">
            What developers are saying
          </p>
        </Reveal>
        <TestimonialGrid />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal direction="up">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Ready to see it in action?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you&apos;re validating a product or looking for your next
            hire, the next Cozy Arena competition is the fastest way to find
            out.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Get in touch
          </a>
        </Reveal>
      </section>
    </div>
  );
}