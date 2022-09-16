import React from "react";
import Link from "next/link";

export default function FooterList({ href, title }) {
  return (
    <Link href={href} className="mb-6">
      <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
    </Link>
  );
}
