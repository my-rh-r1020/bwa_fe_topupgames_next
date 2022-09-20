import React from "react";

// Components
import Button from "../../Basics/Button";
import TextInput from "../../Basics/TextInput";

export default function SignUpForm({ form, handleChange, handleSubmit, handleRouter }) {
  return (
    <form action="">
      {/* Full Name */}
      <TextInput label="Full Name" type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} />

      {/* Username */}
      <TextInput label="Username" type="text" name="username" placeholder="Enter your username" value={form.username} onChange={handleChange} />

      {/* Email */}
      <TextInput label="Email Address" type="email" name="email" placeholder="Enter your email address" value={form.email} onChange={handleChange} />

      {/* Password */}
      <TextInput label="Password (Min 6 characters)" type="password" name="password" placeholder="Your password" value={form.password} onChange={handleChange} />

      <div className="button-group d-flex flex-column mx-auto pt-50">
        <Button buttonName="Register Now" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16" action={handleSubmit} />
        <Button buttonName="Sign In" className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill" action={handleRouter} />
      </div>
    </form>
  );
}
