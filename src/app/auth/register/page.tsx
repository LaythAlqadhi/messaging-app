import type { Metadata } from "next";

import { RegisterForm } from "./_components/form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "A team of skilled professionals dedicated to creating innovative and user-friendly applications.",
  metadataBase: new URL("http://localhost:3000"),
};

function Register() {
  return (
    <section className="flex flex-col justify-center items-center gap-2 w-full">
      <h2 className="text-foreground text-lg self-start">Register</h2>
      <RegisterForm />
    </section>
  );
}

export default Register;
