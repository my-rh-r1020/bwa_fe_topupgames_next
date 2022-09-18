import React from "react";

// Component
import VoucherItems from "./voucherItems";

export default function ListVouchers({ voucherData }) {
  return (
    <div className="pt-md-50 pb-md-50 pt-30 pb-20">
      <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
      <div className="row justify-content-between">
        {voucherData.length !== 0 ? (
          voucherData.map((item, i) => (
            <VoucherItems
              key={i.id}
              htmlFor={`topup${item._id}`}
              id={`topup${item._id}`}
              name="topup"
              value={`topup${item._id}`}
              coinQuantity={item.nominal.coinQuantity}
              coinName={item.nominal.coinName}
              price={`Rp ${item.nominal.price}`}
            />
          ))
        ) : (
          <p className="text-lg color-palette-1 mb-md-10 mb-0">Nominal Topup is not found</p>
        )}

        {/* <VoucherItems htmlFor="topup1" id="topup1" name="topup" value="topup1" coinQuantity="125" coinName="Gold" price="Rp 3.250.000" />
        <VoucherItems htmlFor="topup2" id="topup2" name="topup" value="topup2" coinQuantity="225" coinName="Gold" price="Rp 3.250.000" />
        <VoucherItems htmlFor="topup3" id="topup3" name="topup" value="topup3" coinQuantity="350" coinName="Gold" price="Rp 3.250.000" />
        <VoucherItems htmlFor="topup4" id="topup4" name="topup" value="topup4" coinQuantity="550" coinName="Gold" price="Rp 3.250.000" />
        <VoucherItems htmlFor="topup5" id="topup5" name="topup" value="topup5" coinQuantity="750" coinName="Gold" price="Rp 3.250.000" /> */}
        <div className="col-lg-4 col-sm-6"></div>
      </div>
    </div>
  );
}
