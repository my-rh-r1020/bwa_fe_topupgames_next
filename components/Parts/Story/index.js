import Link from "next/link";
import React from "react";

// Import Component
import ReachedDesc from "./ReachDescription";

export default function Story() {
  return (
    <>
      {/* Reached */}
      <section className="reached pt-50 pb-50" id="story">
        <div className="container-fluid">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
            <ReachedDesc className="me-lg-35" title="290M" subtitle="Players Top Up" />

            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <ReachedDesc className="me-lg-35 ms-lg-35" title="12.500" subtitle="Games Available" />

            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <ReachedDesc className="me-lg-35 ms-lg-35" title="99,9%" subtitle="Happy Players" />

            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <ReachedDesc className="me-lg-35 ms-lg-35" title="4.7" subtitle="Rating Worldwide" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="story pt-50 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
            <div className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60" data-aos="zoom-in">
              <img src="/images/Header-9.png" width="612" height="452" className="img-fluid" alt="image-story" />
            </div>
            <div className="col-lg-5 col-12 ps-lg-60">
              <div className="">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                  Win the battle.
                  <br />
                  Be the Champion.
                </h2>
                <p className="text-lg color-palette-1 mb-30">
                  Kami menyediakan jutaan cara untuk
                  <br className="d-sm-block d-none" />
                  membantu players menjadi
                  <br className="d-sm-block d-none" />
                  pemenang sejati
                </p>
                <div className="d-md-block d-flex flex-column w-100">
                  <Link href="#">
                    <a className="btn btn-read text-lg rounded-pill">Read Story</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
