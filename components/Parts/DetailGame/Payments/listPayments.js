import React from "react";

// Component
import PaymentItems from "./paymentItems";

export default function ListPayments() {
  return (
    <div className="pb-md-50 pb-20">
      <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
      <fieldset id="paymentMethod">
        <div className="row justify-content-between">
          <PaymentItems htmlFor="transfer" id="transfer" name="paymentMethod" value="transfer" paymentMethod="Transfer Bank" paymentName="Bank Name" />
          <PaymentItems htmlFor="visa" id="visa" name="paymentMethod" value="visa" paymentMethod="E-Money" paymentName="E-Money Name" />
          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </fieldset>
    </div>
  );
}
