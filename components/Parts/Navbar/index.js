// Library
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

// Import Component
import NavLink from "../NavLink";
import Button from "../../Basics/Button";

export default function Navbar() {
  const API_IMAGE = process.env.NEXT_PUBLIC_API_PRO;

  const router = useRouter(),
    signinPath = "/signin",
    [isToken, setToken] = useState("");

  // Handle Token
  const handleTokenProcess = () => {
    // Get Token Cookies
    const xtoken = Cookies.get("xpToken");

    if (xtoken) {
      // Original Token Conversion
      const token = atob(xtoken);

      // Decode Token
      const decodeTkn = jwt_decode(token);

      setToken(decodeTkn);
    }
  };

  useEffect(() => {
    handleTokenProcess();
  }, []);

  // Handle Signout
  const handleSignout = () => {
    // Remove token
    Cookies.remove("token");

    toast.success("Successfully Sign Out", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Redirect to Sign In
    router.push("/signin");
  };

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

              {/* Signin Token Check */}
              {router.pathname !== signinPath && (
                <li className={`${isToken ? "nav-item my-auto dropdown d-flex" : "nav-item my-auto"}`}>
                  {isToken ? (
                    <div>
                      <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={`${API_IMAGE}/uploads/avatar/${isToken.avatar}`} className="rounded-circle" width="50" height="50" alt="avatar" />
                      </a>

                      <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                        <Link href="/member/dashboard">
                          <a className="dropdown-item text-lg color-palette-2">Dashboard</a>
                        </Link>
                        <Link href="#">
                          <a className="dropdown-item text-lg color-palette-2">My Account</a>
                        </Link>
                        <Button buttonName="Sign Out" className="dropdown-item text-lg color-palette-2" action={handleSignout} />
                        {/* <Link href="#">
                          <a className="dropdown-item text-lg color-palette-2">Log Out</a>
                        </Link> */}
                      </ul>
                    </div>
                  ) : (
                    <NavLink href="/signin" title="Sign In" className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill" />
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
