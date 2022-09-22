import React from "react";

export default function MainContent({ nameIcon, gameCategory, spentTotal }) {
  return (
    <div className="row">
      <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
        <div className="categories-card">
          <div className="d-flex align-items-center mb-24">
            <img src={`/icons/dashboard/${nameIcon}.svg`} />
            <p className="color-palette-1 mb-0 ms-12">{gameCategory}</p>
          </div>
          <div>
            <p className="text-sm color-palette-2 mb-1">Total Spent</p>
            <p className="text-2xl color-palette-1 fw-medium m-0">{`Rp ${spentTotal}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
