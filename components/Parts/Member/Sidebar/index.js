// Library
import React from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

// Components
import ProfileUser from "./sidebarProfile";
import MenuLink from "./menuLink";
import SidebarFooter from "./sidebarFooter";

export default function SidebarNavigation() {
  const router = useRouter();

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
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        {/* Profile */}
        <ProfileUser />

        {/* Menu Nav */}
        <div className="menus">
          <MenuLink href="./dashboard" className="item mb-30 active" nameIcon="ic-dashboard" sidebarName="Dashboard" />
          <MenuLink href="./transactions" className="item mb-30" nameIcon="ic-transactions" sidebarName="Transactions" />
          <MenuLink href="#" className="item mb-30" nameIcon="ic-message" sidebarName="Messages" />
          <MenuLink href="#" className="item mb-30" nameIcon="ic-card" sidebarName="Card" />
          <MenuLink href="#" className="item mb-30" nameIcon="ic-reward" sidebarName="Rewards" />
          <MenuLink href="./settings" className="item mb-30" nameIcon="ic-setting" sidebarName="Settings" />
          <MenuLink href="/signin" className="item mb-30" nameIcon="ic-logout" sidebarName="Log Out" />
        </div>

        {/* Footer */}
        <SidebarFooter />
      </div>
    </section>
  );
}
