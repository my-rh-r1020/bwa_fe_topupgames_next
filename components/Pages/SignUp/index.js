import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

// Component
import SignupForm from "../../Forms/SignUp";
import { postData } from "../../../services/fetchData";

export default function SignUpPage() {
  const ROOT_API = process.env.NEXT_PUBLIC_API_PRO,
    API_VERSION = "api/v1-player";

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
  const handleSubmit = async () => {
    try {
      // Fetch API
      const res = await postData(`${ROOT_API}/${API_VERSION}/player/signup`, form);

      if (res.data) {
        // Message Toast
        toast.success("Registration is Success. Please Sign In ...", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Redirect to Sign In
        router.push("/signup-success");
      }
    } catch (err) {}
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
