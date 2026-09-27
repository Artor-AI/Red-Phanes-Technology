export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: [add date]</p>

      <div className="mt-10 space-y-8 text-muted-foreground">
        <div>
          <h2 className="text-lg font-medium text-foreground">What we collect</h2>
          <p className="mt-2 text-sm">
            If you reach out by email or phone, we keep whatever you send us —
            your name, contact details, and the content of your message — so
            we can respond and keep track of the conversation.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-foreground">How we use it</h2>
          <p className="mt-2 text-sm">
            We use your information to respond to your inquiry, coordinate
            sponsorships or competitions, and — if you&apos;re a developer on
            Cozy Arena — to evaluate submissions and connect you with
            sponsor companies where relevant.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-foreground">What we don&apos;t do</h2>
          <p className="mt-2 text-sm">
            We don&apos;t sell your information to third parties. We don&apos;t
            share developer data with sponsors beyond what&apos;s needed for
            the talent-matching services described on this site.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-foreground">Questions</h2>
          <p className="mt-2 text-sm">
            Reach out any time at{' '}
            <a href="mailto:krishsamuel1234@gmail.com" className="text-primary underline underline-offset-4">
              krishsamuel1234@gmail.com
            </a>{' '}
            if you have questions about how your information is handled.
          </p>
        </div>
      </div>
    </div>
  );
}