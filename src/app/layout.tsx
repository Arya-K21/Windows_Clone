import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or use Roboto as user mentioned? User said "e.g. from Google Fonts like Inter, Roboto". Inter is default.
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Windows 11 Style",
  description: "Interactive portfolio inspired by Windows 11 logic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} text-gray-900 dark:text-gray-100 min-h-screen overflow-hidden selection:bg-win-light-accent selection:text-white dark:selection:bg-win-dark-highlight`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
