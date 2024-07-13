import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Auth() {
  return (
    <section className="flex flex-col justify-center items-center gap-2 text-center w-full">
      <Button size="full" className="bg-primary" asChild>
        <Link href="/auth/signin">Sign In</Link>
      </Button>
      <Button variant="secondary" size="full" asChild>
        <Link href="/auth/register">Register</Link>
      </Button>
      <Button variant="link" size="full" className="text-primary" asChild>
        <Link href="/auth/demo-account">Continue with a demo account.</Link>
      </Button>
    </section>
  );
}
