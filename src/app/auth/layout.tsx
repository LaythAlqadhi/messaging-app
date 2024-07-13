import type { Metadata } from "next";

import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-dvh flex flex-col items-center justify-between p-6 bg-background">
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <Logo />
        <h1 className="text-xl text-foreground">Welcome to Messaging App</h1>
        <p className="text-muted-foreground">
          The simple way to text right from your browser.
        </p>
      </div>
      {children}
    </main>
  );
}