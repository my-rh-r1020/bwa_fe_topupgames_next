// Library
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

// Components
import SidebarNavigation from "../../Parts/Member/Sidebar";
import ProfileList from "../../Parts/Member/Settings/profileList";
import Button from "../../Basics/Button";

export default function SettingPage() {
  const API_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE,
    router = useRouter(),
    [token, setToken] = useState("");

  // Handle Router
  const handleRouter = () => {
    router.push("/member/edit-profile");
  };

  // Handle Token
  const handleTokenProcess = () => {
    // Get Token from localStorage
    const tokenLocal = Cookies.get("xpToken"),
      // Token Parse
      tokenParse = atob(tokenLocal);

    // Token Decode
    const tknDecode = jwtDecode(tokenParse);

    setToken(tknDecode);
  };

  useEffect(() => {
    handleTokenProcess();
  }, []);

  return (
    <section className="edit-profile overflow-auto">
      <SidebarNavigation />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-40">Profile</h2>
          <div className="details">
            <div className="main-content main-content-card overflow-auto">
              <section className="checkout ">
                <div className="d-flex flex-row align-items-center justify-content-between mb-30">
                  <div className="game-checkout d-flex flex-row align-items-center">
                    <div className="pe-4">
                      <div className="cropped">
                        <img src={`${API_IMAGE}/avatar/${token.avatar}`} width="200" height="130" className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="purchase pt-30">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">Account Detail</h2>
                  <ProfileList profilePoint="Player ID" profileItem={token.playerId} />
                  <ProfileList profilePoint="Full Name" profileItem={token.name} />
                  <ProfileList profilePoint="User Name" profileItem={token.username} />
                  <ProfileList profilePoint="Email" profileItem={token.email} />
                  <ProfileList profilePoint="Phone Number" profileItem={token.phoneNumber} />
                </div>
              </section>
              <div className="button-group d-flex flex-column pt-40">
                <Button buttonName="Update My Profile" className="btn btn-save fw-medium text-lg text-white rounded-pill" action={handleRouter} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
