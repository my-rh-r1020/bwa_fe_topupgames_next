import Link from "next/link";
import React from "react";

// Import Component
import FooterList from "./footerList";

export default function Footer() {
  return (
    <footer className="footer pt-50">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 text-lg-start text-center">
            <Link href="/">
              <a className="navbar-brand">
                <img src="/icons/logo.svg" />
              </a>
            </Link>
            <p className="mt-30 text-lg color-palette-1 mb-30">
              StoreGG membantu gamers
              <br />
              untuk menjadi pemenang sejati
            </p>
            <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2022. All Rights Reserved.</p>
          </div>
          <div className="col-lg-8 mt-lg-0 mt-20">
            <div className="row gap-sm-0">
              <div className="col-md-4 col-6 mb-lg-0 mb-25">
                <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
                <ul className="list-unstyled">
                  <FooterList href="" title="About Us" />
                  <FooterList href="" title="Press Release" />
                  <FooterList href="" title="Terms of Use" />
                  <FooterList href="" title="Privacy & Policy" />
                </ul>
              </div>
              <div className="col-md-4 col-6 mb-lg-0 mb-25">
                <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
                <ul className="list-unstyled">
                  <FooterList href="" title="Refund Policy" />
                  <FooterList href="" title="Unlock Rewards" />
                  <FooterList href="" title="Live Chatting" />
                </ul>
              </div>
              <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
                <ul className="list-unstyled">
                  <FooterList href="mailto: hi@store.gg" title="hi@store.gg" />
                  <FooterList href="mailto: team@store.gg" title="team@store.gg" />
                  <FooterList href="" title="Pasific 12, Jakarta Selatan" />
                  <FooterList href="tel: 02111229090" title="021 - 1122 - 9090" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
