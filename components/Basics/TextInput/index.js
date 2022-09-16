import React from "react";

export default function TextInput({ label, type, name, placeholder, value, onChange }) {
  return (
    <div className="pt-30">
      <label className="form-label text-lg fw-medium color-palette-1 mb-10">{label}</label>
      <input type={type} className="form-control rounded-pill text-lg" id="email" aria-describedby="email" name={name} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
