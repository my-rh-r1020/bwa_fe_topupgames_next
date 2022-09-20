// Library
import React from "react";

// Components
import TextInput from "../../Basics/TextInput";
import Button from "../../Basics/Button";
import ListPayments from "../../Parts/DetailGame/Payments/listPayments";
import ListVouchers from "../../Parts/DetailGame/Vouchers/listVouchers";

export default function CheckoutForm({ data1, data2, form, handleChange, handleSubmit }) {
  return (
    <form action="" method="POST">
      {/* Game Account Form */}
      <TextInput label="Game Account" type="text" name="accountPlayer" placeholder="Enter your account game" value={form.accountPlayer} onChange={handleChange} />

      {/* Game Voucher List */}
      <ListVouchers voucherData={data1} />

      {data1.length === 0 ? "" : <ListPayments paymentData={data2} />}

      {/* <div className="pb-50">
        <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Bank Account Name
        </label>
        <input type="text" className="form-control rounded-pill text-lg" id="bankAccount" name="bankAccount" aria-describedby="bankAccount" placeholder="Enter your Bank Account Name" />
      </div> */}
      <div className="d-sm-block d-flex flex-column w-100">
        <Button buttonName="Checkout Now" className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg" action={() => handleSubmit()} />
      </div>
    </form>
  );
}
