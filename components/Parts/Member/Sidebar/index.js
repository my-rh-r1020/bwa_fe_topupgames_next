// Library
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

// Components
import ProfileUser from "./sidebarProfile";
import MenuLink from "./menuLink";
import SidebarFooter from "./sidebarFooter";
import Link from "next/link";

export default function SidebarNavigation() {
  const router = useRouter(),
    [token, setToken] = useState("");

  // Handle Token Process
  const handleTokenProcess = () => {
    // Get Token Cookies
    const xtoken = Cookies.get("xpToken"),
      // Token Parse
      token = atob(xtoken);

    // Decode Token
    const decodeTkn = jwtDecode(token);

    setToken(decodeTkn);
  };

  useEffect(() => {
    handleTokenProcess();
  }, []);

  const handleSignout = () => {
    // Remove token
    Cookies.remove("xpToken");

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
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        {/* Profile */}
        <ProfileUser dataPlayer={token} />

        {/* Menu Nav */}
        <div className="menus">
          <MenuLink href="./dashboard" className="item mb-30 active" nameIcon="ic-dashboard" sidebarName="Dashboard" />
          <MenuLink href="./transactions" className="item mb-30" nameIcon="ic-transactions" sidebarName="Transactions" />
          <MenuLink href="#" className="item mb-30" nameIcon="ic-message" sidebarName="Messages" />
          <MenuLink href="#" className="item mb-30" nameIcon="ic-card" sidebarName="Card" />
          <MenuLink href="#" className="item mb-30" nameIcon="ic-reward" sidebarName="Rewards" />
          <MenuLink href="./settings" className="item mb-30" nameIcon="ic-setting" sidebarName="Settings" />
          <div className="item mb-30">
            <img src={`/icons/sidebar/ic-logout.svg`} className="icon me-3" />
            <p className="item-title m-0">
              <Link href="/signin">
                <a className="text-lg text-decoration-none" onClick={handleSignout}>
                  Sign Out
                </a>
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <SidebarFooter />
      </div>
    </section>
  );
}
