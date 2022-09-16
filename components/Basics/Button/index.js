import React from "react";

export default function Button({ className, action, buttonName }) {
  return (
    <button type="button" className={className} onClick={action}>
      {buttonName}
    </button>
  );
}
