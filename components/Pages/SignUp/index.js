import React, { useState } from "react";
import Link from "next/link";

// Component
import SignupForm from "../../Forms/SignUp";
import { useRouter } from "next/router";

export default function SignUpPage() {
  const router = useRouter(),
    // Use State
    [form, setForm] = useState({ name: "", username: "", email: "", password: "" });

  // Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Router
  const handleRouter = () => {
    router.push("/signin");
  };

  // Handle Submit
  const handleSubmit = () => {
    router.push("/signup-success");
  };

  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <div className="pb-50">
          <Link href="/">
            <a className="navbar-brand">
              <img src="icons/logo.svg"></img>
            </a>
          </Link>
        </div>
        <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
        <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>

        {/* Signup Form */}
        <SignupForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} handleRouter={handleRouter} />
      </div>
    </section>
  );
}
