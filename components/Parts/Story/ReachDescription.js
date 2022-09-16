import React from "react";

export default function ReachDescription({ className, title, subtitle }) {
  return (
    <div className={className}>
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{title}</p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">{subtitle}</p>
    </div>
  );
}
