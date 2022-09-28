// Library
import React from "react";
import Link from "next/link";

// Components
import SidebarNavigation from "../../Parts/Member/Sidebar";
import ProfileList from "../../Parts/Member/Settings/profileList";
import Button from "../../Basics/Button";

export default function SettingPage() {
  return (
    <section className="edit-profile overflow-auto">
      <SidebarNavigation />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-40">Settings</h2>

          <div className="d-md-block d-flex flex-column w-100">
            <Link href="#">
              <a className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg" role="button">
                WhatsApp ke Admin
              </a>
            </Link>
          </div>

          <div className="details">
            <div className="main-content main-content-card overflow-auto">
              <section className="checkout mx-auto">
                <div className="d-flex flex-row align-items-center justify-content-between mb-30">
                  <div className="game-checkout d-flex flex-row align-items-center">
                    <div className="pe-4">
                      <div className="cropped">
                        <img src="/images/Thumbnail-3.png" width="200" height="130" className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="purchase pt-30">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">Account Detail</h2>
                  <ProfileList profilePoint="Player ID" profileItem="masayoshizero" />
                  <ProfileList profilePoint="Full Name" profileItem="masayoshizero" />
                  <ProfileList profilePoint="User Name" profileItem="masayoshizero" />
                  <ProfileList profilePoint="Email" profileItem="masayoshizero" />
                  <ProfileList profilePoint="Phone Number" profileItem="masayoshizero" />
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
