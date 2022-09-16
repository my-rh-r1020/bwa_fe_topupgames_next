// Library
import Link from "next/link";
import React from "react";

// Import Component
import NavLink from "../NavLink";

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/icons/logo.svg" />
            </a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <NavLink href="/" title="Home" className="nav-link active" />
              <NavLink href="#feature" title="Features" className="nav-link" />
              <NavLink href="#games" title="Games" className="nav-link" />
              <NavLink href="#story" title="Stories" className="nav-link" />
              <NavLink href="#" title="Our Reviews" className="nav-link" />
              {/* Signin Button */}
              <NavLink href="/signin" title="Sign In" className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill" />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
