import "../styles/globals.css";
import dynamic from "next/dynamic";
const Providers = dynamic(() => import("../components/Providers"), { ssr: false });
import { ToastProvider } from "../components/ui/Toast";
import { ThemeProvider } from "../components/ThemeProvider";
const CursorGlow = dynamic(() => import("../components/CursorGlow"), { ssr: false });

export const metadata = {
  title: "Dawit Workye — Full-Stack Developer & DevOps Enthusiast",
  description:
    "Portfolio of Dawit Workye. Full-Stack Developer & DevOps Enthusiast from Ethiopia.",
};

export default function RootLayout({ children }: { children }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-900 text-slate-200 antialiased selection:bg-cyan-400/30 selection:text-cyan-100">
        <ThemeProvider defaultTheme="dark" storageKey="dawit-portfolio-theme">
          <ToastProvider>
            <Providers>
              {children}
              <CursorGlow />
            </Providers>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
