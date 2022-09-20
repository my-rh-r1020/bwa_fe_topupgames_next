import React from "react";

// Component
import VoucherItems from "./voucherItems";

export default function ListVouchers({ voucherData }) {
  return (
    <div className="pt-md-50 pb-md-50 pt-30 pb-20">
      <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
      <div className="row justify-content-between">
        {voucherData.length !== 0 ? (
          voucherData.map((voucher, i) => (
            <VoucherItems key={i.id} htmlFor={voucher._id} id={voucher._id} name="topup" value={voucher._id} coinQuantity={voucher.nominal.coinQuantity} coinName={voucher.nominal.coinName} price={`Rp ${voucher.nominal.price}`} />
          ))
        ) : (
          <label className="col-lg col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10">
            <div className="detail-card" style={{ background: "#FFC3C3" }}>
              <p className="text-3xl color-palette-1 m-0">Nominal Topup is not found!</p>
            </div>
          </label>
        )}

        {/* <VoucherItems htmlFor="topup1" id="topup1" name="topup" value="topup1" coinQuantity="125" coinName="Gold" price="Rp 3.250.000" />
        <VoucherItems htmlFor="topup2" id="topup2" name="topup" value="topup2" coinQuantity="225" coinName="Gold" price="Rp 3.250.000" /> */}
        <div className="col-lg-4 col-sm-6"></div>
      </div>
    </div>
  );
}
