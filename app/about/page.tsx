import GlassIcons from '@/components/effects/glass-icons';
import { Server, Shield, Settings, Database, Activity } from 'lucide-react';
import { Reveal } from '@/components/effects/reveal';
import { GradientBlobCard, cardThemes } from '@/components/effects/gradient-blob-card';

const approachIcons = [
  { icon: <Server size={20} />, color: '#2D6CA6', label: 'Flask backend' },
  { icon: <Shield size={20} />, color: '#3E7CB8', label: 'Security tooling' },
  { icon: <Settings size={20} />, color: '#4A86C4', label: 'Admin controls' },
  { icon: <Database size={20} />, color: '#5A93CE', label: 'Data export pipelines' },
  { icon: <Activity size={20} />, color: '#6BA0D8', label: 'Real-time logging' },
];

const whyBroken = [
  'Take-home assignments are slow and easy to game',
  "Whiteboard interviews don't reflect real engineering work",
  'Dev tools often ship without real-world stress testing',
];

const sponsorsGet = ['Real-world friction reports', 'Usage analytics', 'A vetted talent pipeline'];
const developersGet = [
  'Objective scorecards',
  'Real competition experience',
  'Visibility to companies actively hiring',
];
const sponsorsLeaveWith = [
  'DX friction reports',
  'Usability audits',
  'Structured bug reports',
  'Ranked candidate scorecards',
];
const developersLeaveWith = ['Objective skill scorecards', 'Real-world experience', 'Hiring visibility'];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Reveal direction="up">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">About Red Phanes</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          We&apos;re a DevRel and technical recruitment platform built around
          one idea: the best way to evaluate a developer tool — or a
          developer — is to watch them work in real time.
        </p>
      </Reveal>

      <div className="mt-12 space-y-8">
        <Reveal direction="left" id="why" className="scroll-mt-24">
          <GradientBlobCard theme="light">
            <h2 className="text-2xl font-semibold">Why we exist</h2>
            <p className={`mt-3 ${cardThemes.light.subtext}`}>Traditional evaluation is broken:</p>
            <ul className="mt-3 space-y-2">
              {whyBroken.map((w) => (
                <li key={w} className={`flex gap-3 text-sm ${cardThemes.light.subtext}`}>
                  <span>•</span>
                  {w}
                </li>
              ))}
            </ul>
            <p className={`mt-4 ${cardThemes.light.subtext}`}>
              We fix both problems with one format: live coding competitions.
            </p>
          </GradientBlobCard>
        </Reveal>

        <Reveal direction="right" id="how" className="scroll-mt-24">
          <GradientBlobCard theme="purple">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <p className="mt-3 text-white/80">
              Developers and students compete on{' '}
              <a href="https://cozyarena.tech" className="underline underline-offset-4">
                Cozy Arena
              </a>
              , our hackathon platform. Sponsors plug their APIs, SDKs, or
              infrastructure into the competition. Every submission is
              evaluated by our AI Judge & Talent Scout Engine.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <div className="text-sm font-medium">Sponsors get:</div>
                <ul className="mt-2 space-y-1.5">
                  {sponsorsGet.map((s) => (
                    <li key={s} className="flex gap-2 text-sm text-white/80">
                      <span>•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-sm font-medium">Developers get:</div>
                <ul className="mt-2 space-y-1.5">
                  {developersGet.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-white/80">
                      <span>•</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GradientBlobCard>
        </Reveal>

        <Reveal direction="left" id="approach" className="scroll-mt-24">
          <GradientBlobCard theme="teal">
            <h2 className="text-2xl font-semibold">Our approach</h2>
            <p className="mt-3 text-white/80">Cozy Arena is a full production-grade platform:</p>
            <GlassIcons items={approachIcons} className="!gap-[3em] !py-8" />
            <p className="mt-2 text-white/80">
              The AI Judge & Talent Scout Engine is a dedicated evaluation
              service — not a leaderboard add-on.
            </p>
          </GradientBlobCard>
        </Reveal>

        <Reveal direction="right" id="get" className="scroll-mt-24">
          <GradientBlobCard theme="light">
            <h2 className="text-2xl font-semibold">What you get</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div>
                <div className="text-sm font-medium">Sponsors leave with:</div>
                <ul className="mt-2 space-y-1.5">
                  {sponsorsLeaveWith.map((s) => (
                    <li key={s} className={`flex gap-2 text-sm ${cardThemes.light.subtext}`}>
                      <span>•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-sm font-medium">Developers leave with:</div>
                <ul className="mt-2 space-y-1.5">
                  {developersLeaveWith.map((d) => (
                    <li key={d} className={`flex gap-2 text-sm ${cardThemes.light.subtext}`}>
                      <span>•</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GradientBlobCard>
        </Reveal>
      </div>
    </div>
  );
}