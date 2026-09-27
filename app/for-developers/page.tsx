import { Reveal } from '@/components/effects/reveal';
import { StepReveal } from '@/components/effects/step-reveal';
import { ScrollCardStack } from '@/components/effects/scroll-card-stack';
import { GlowCard } from '@/components/effects/glow-card';

const perks = [
  'Compete in live hackathons with real prizes',
  'Get an AI-generated skill scorecard for your portfolio',
  'Get noticed by sponsor companies actively hiring',
  'Build with real production APIs and SDKs — not toy problems',
];

const evaluationCriteria = [
  'Correctness — does the solution work under competition constraints',
  'Architecture — structure, modularity, clarity, and design choices',
  'Problem-solving under pressure — iteration speed, debugging patterns',
  "Tool usage — how effectively you used the sponsor's API/SDK",
  'Behavioral signal — how you approached the challenge with a live clock running',
];

const steps = [
  { title: 'Create an account', description: 'Sign up on Cozy Arena — it takes a couple of minutes.' },
  { title: 'Join a competition', description: 'Browse open hackathons and pick one that matches your interests or stack.' },
  { title: 'Build live', description: "Submit code against a real challenge built around a sponsor's actual product." },
  { title: 'Get your scorecard', description: 'Our AI Judge evaluates your submission and generates a capability scorecard.' },
  { title: 'Get discovered', description: 'Top performers are surfaced directly to sponsor companies hiring for that stack.' },
];

export default function ForDevelopersPage() {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal direction="up">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Compete. Get scored. Get hired.
          </h1>
          <p className="mt-6 text-muted-foreground">
            Cozy Arena is our live hackathon platform where developers and
            students compete on real challenges, submit code, and get
            discovered by companies hiring for their stack.
          </p>
        </Reveal>

        <StepReveal id="perks" className="mt-10 space-y-4 scroll-mt-24">
          {perks.map((perk) => (
            <div key={perk} className="flex gap-3 text-muted-foreground">
              <span className="text-primary">✓</span>
              {perk}
            </div>
          ))}
        </StepReveal>
      </div>

      <div id="how-it-works" className="scroll-mt-24 bg-overlay-bg">
        <ScrollCardStack
          title="How it works"
          cards={steps.map((s, i) => (
            <div key={s.title} className="flex h-full flex-col justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-base font-medium text-primary">
                {i + 1}
              </span>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-4xl">{s.title}</h3>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">{s.description}</p>
            </div>
          ))}
        />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal direction="left" id="criteria" className="scroll-mt-24">
          <GlowCard className="p-8">
            <h2 className="text-xl font-medium">What the AI Judge actually looks at</h2>
            <ul className="mt-6 space-y-3">
              {evaluationCriteria.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-muted-foreground md:text-base">
                  <span className="text-primary">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </GlowCard>
        </Reveal>

        <Reveal direction="up" className="mt-12 text-center">
          <a
            href="https://cozyarena.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Join a competition on Cozy Arena
          </a>
        </Reveal>
      </div>
    </div>
  );
}