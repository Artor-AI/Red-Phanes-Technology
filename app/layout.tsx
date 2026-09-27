import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
// @ts-expect-error Next.js handles global CSS imports at build time.
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { CustomCursor } from '@/components/effects/custom-cursor';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const sora = Sora({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Red Phanes Technology — DevRel & Technical Recruitment',
  description:
    'Live coding events and AI-powered evaluation to help tech companies validate developer tools and recruit top engineering talent.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} font-body min-h-screen flex flex-col bg-background text-foreground`}
      >
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}