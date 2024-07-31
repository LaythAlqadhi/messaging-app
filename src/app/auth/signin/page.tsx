import type { Metadata } from "next";

import { LogInForm } from "./_components/form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "A team of skilled professionals dedicated to creating innovative and user-friendly applications.",
  metadataBase: new URL("http://localhost:3000"),
};

function Login() {
  return (
    <section className="flex flex-col justify-center items-center gap-2 text-center w-full max-w-sm">
      <h2 className="ml-1 text-foreground text-lg self-start">Sign In</h2>
      <LogInForm />
    </section>
  );
}

export default Login;
