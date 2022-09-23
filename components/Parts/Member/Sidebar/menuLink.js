// Library
import React from "react";
import Link from "next/link";

export default function MenuLink({ className, nameIcon, href, sidebarName }) {
  return (
    <div className={className}>
      <img src={`/icons/sidebar/${nameIcon}.svg`} className="icon me-3" />
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{sidebarName}</a>
        </Link>
      </p>
    </div>
  );
}
