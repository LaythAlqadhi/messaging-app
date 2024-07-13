import { ModeToggle } from "@/components/mode-toggle";
import { LogOutButton } from "@/components/logout-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
      <LogOutButton />
      <ModeToggle />
    </main>
  );
}
