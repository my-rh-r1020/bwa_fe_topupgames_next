import React from "react";

// Components
import ProfileUser from "./sidebarProfile";
import MenuLink from "./menuLink";
import SidebarFooter from "./sidebarFooter";

export default function SidebarNavigation() {
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
