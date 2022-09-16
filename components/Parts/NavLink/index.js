// Library
import Link from "next/link";
import React from "react";

export default function NavLink({ href, className, title }) {
  return (
    <Link href={href} className="nav-item my-auto">
      <a className={className} aria-current="page">
        {title}
      </a>
    </Link>
  );
}
