import React from "react";

// Components
import Button from "../../Basics/Button";
import TextInput from "../../Basics/TextInput";

export default function SignInForm({ form, handleChange, handleSubmit, handleRouter }) {
  return (
    <form>
      {/* Email */}
      <TextInput label="Email Address" type="email" name="email" placeholder="Enter your email address" value={form.email} onChange={handleChange} />

      {/* Password */}
      <TextInput label="Password (6 characters)" type="password" name="password" value={form.password} placeholder="Type your password" onChange={handleChange} />

      <div className="button-group d-flex flex-column mx-auto pt-50">
        <Button buttonName="Continue to Sign In" className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16" action={handleSubmit} />
        <Button buttonName="Sign Up" className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill" action={handleRouter} />
      </div>
    </form>
  );
}
