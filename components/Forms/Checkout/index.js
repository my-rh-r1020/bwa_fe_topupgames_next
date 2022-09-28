// Library
import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import numeral from "numeral";

// Components
import TextInput from "../../Basics/TextInput";
import Button from "../../Basics/Button";
import VoucherItems from "../../Parts/DetailGame/voucherItems";
import PaymentItems from "../../Parts/DetailGame/paymentItems";

export default function CheckoutForm({ data1, data2 }) {
  const { query } = useRouter(),
    router = useRouter(),
    token = Cookies.get("xpToken"),
    // Use State
    [form, setForm] = useState({ accountPlayer: "" }),
    [voucherList, setVoucherList] = useState({}),
    [paymentList, setPaymentList] = useState({});

  // Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Voucher Change
  const handleVoucherItemChange = (data) => {
    setVoucherList(data);
  };

  // Handle Payment Change
  const handlePaymentItemChange = (data) => {
    setPaymentList(data);
  };

  // Handle Submit
  const handleSubmit = () => {
    // Check Token Player
    if (!token) {
      toast.error("Please Sign In Before Checkout", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return router.push("/signin");
    }

    if (form === "" || voucherList === {} || paymentList === {}) {
      toast.error("Please filled this form");
    } else {
      const data = {
        form,
        voucherList,
        paymentList,
      };
      localStorage.setItem("topup-data", JSON.stringify(data));
      router.push(`/checkout/${query.id}`);
    }
  };

  return (
    <form method="POST">
      {/* Game Account Form */}
      <TextInput label="Game Account" type="text" name="accountPlayer" placeholder="Enter your account game" value={form.accountPlayer} onChange={handleChange} />

      {/* Voucher List */}
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
        <div className="row justify-content-between">
          {data1.length !== 0 ? (
            data1.map((voucher, i) => (
              <VoucherItems
                key={i._id}
                voucherId={voucher._id}
                onChange={() => handleVoucherItemChange(voucher)}
                id={voucher._id}
                value={voucher._id}
                coinQuantity={voucher.nominal.coinQuantity}
                coinName={voucher.nominal.coinName}
                price={`Rp ${numeral(voucher.nominal.price).format("0,0")}`}
              />
            ))
          ) : (
            <label className="col-lg col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10">
              <div className="detail-card" style={{ background: "#FFC3C3" }}>
                <p className="text-3xl color-palette-1 m-0">Nominal Topup is not found!</p>
              </div>
            </label>
          )}
          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </div>

      {/* Payment List */}
      {data1.length === 0 ? (
        ""
      ) : (
        <>
          <div className="pb-md-50 pb-20">
            <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
            <fieldset id="paymentMethod">
              <div className="row justify-content-between">
                {data2.map((payment, i) => (
                  <PaymentItems key={i._id} paymentId={payment._id} onChange={() => handlePaymentItemChange(payment)} id={payment._id} value={payment._id} paymentMethod={payment.type} paymentName={`Bank ${payment.banks.namaBank}`} />
                ))}
                <div className="col-lg-4 col-sm-6"></div>
              </div>
            </fieldset>
          </div>

          <div className="d-sm-block d-flex flex-column w-100">
            <Button buttonName="Checkout Now" className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg" action={handleSubmit} />
          </div>
        </>
      )}

      {/* <div className="pb-50">
        <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Bank Account Name
        </label>
        <input type="text" className="form-control rounded-pill text-lg" id="bankAccount" name="bankAccount" aria-describedby="bankAccount" placeholder="Enter your Bank Account Name" />
      </div> */}
    </form>
  );
}
