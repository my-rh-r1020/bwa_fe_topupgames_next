import React from "react";

// Component
import PaymentItems from "./paymentItems";

export default function ListPayments({ paymentData }) {
  return (
    <div className="pb-md-50 pb-20">
      <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
      <fieldset id="paymentMethod">
        <div className="row justify-content-between">
          {paymentData.map((item, i) => (
            <PaymentItems key={i._id} htmlFor={`transfer${item._id}`} id={`transfer${item._id}`} name="paymentMethod" value={`transfer${item._id}`} paymentMethod={item.type} paymentName={`Bank ${item.banks.namaBank}`} />
          ))}
          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </fieldset>
    </div>
  );
}
