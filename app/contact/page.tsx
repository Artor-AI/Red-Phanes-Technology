'use client';

import { useState } from 'react';
import DotGrid from '@/components/effects/dot-grid';
import { SideCardsReveal } from '@/components/effects/side-cards-reveal';
import { GradientBlobCard } from '@/components/effects/gradient-blob-card';
import { Reveal } from '@/components/effects/reveal';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-50">
        <DotGrid dotSize={5} gap={24} baseColor="#A9B8CC" activeColor="#3E93E8" proximity={100} />
      </div>

      <div className="mx-auto max-w-xl px-6 pb-20">
        <div className="pt-8 pb-6">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Get in touch</h1>
          <p className="mt-4 text-muted-foreground">
            Whether you&apos;re a sponsor exploring DX testing and talent
            pipelines, or a developer with a question about Cozy Arena — reach
            out directly, or send a note below.
          </p>
        </div>

        <SideCardsReveal
          left={
            <GradientBlobCard theme="purple" className="min-h-[180px]">
              <a href="mailto:krishsamuel1234@gmail.com" className="block">
                <div className="text-sm font-medium text-white/70">Email</div>
                <div className="mt-1 text-xl font-medium">krishsamuel1234@gmail.com</div>
                <p className="mt-2 text-sm text-white/80">
                  Best for sponsor inquiries, partnership questions, or anything detailed.
                </p>
              </a>
            </GradientBlobCard>
          }
          right={
            <GradientBlobCard theme="teal" className="min-h-[180px]">
              <a href="tel:9631946670" className="block">
                <div className="text-sm font-medium text-white/70">Phone</div>
                <div className="mt-1 text-xl font-medium">(963) 194-6670</div>
                <p className="mt-2 text-sm text-white/80">
                  For a quicker conversation — leave a message if we miss you.
                </p>
              </a>
            </GradientBlobCard>
          }
        />

        <Reveal direction="up" className="mt-8">
          <div className="rounded-[28px] bg-panel p-8">
            <h2 className="font-medium">Or send us a note</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              We read every message and reply by email.
            </p>

            {status === 'success' ? (
              <p className="mt-6 rounded-2xl bg-accent-soft p-4 text-sm text-foreground">
                Thanks — your message is in. We&apos;ll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-border/60 bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-border/60 bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-border/60 bg-background px-3 py-2 text-sm"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600">
                    Something went wrong — try again, or email us directly above.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}