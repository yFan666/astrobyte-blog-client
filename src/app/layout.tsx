import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/theme-provider';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Astrobyte Blog',
  description: 'A modern blog platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${mulish.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container mx-auto px-2">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
