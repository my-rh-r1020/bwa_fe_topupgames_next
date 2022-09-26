// Library
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import Button from "../../Basics/Button";
import TransactionList from "../../Parts/Member/Transactions/transactionList";

export default function CheckoutPage() {
  const router = useRouter();

  // Handle Router
  const handleRouter = () => {
    router.push("/checkout/success-checkout");
  };

  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/icons/logo.svg"></img>
            </a>
          </Link>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout Now</h2>
        </div>
        <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
          <div className="pe-4">
            <div className="cropped">
              <img src="/images/Thumbnail-3.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div>
            <p className="fw-bold text-xl color-palette-1 mb-10">
              Mobile Legends:
              <br />
              The New Battle 2021
            </p>
            <p className="color-palette-2 m-0">Category: Mobile</p>
          </div>
        </div>
        <hr />
        <div className="purchase pt-md-50 pt-30">
          <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
          <TransactionList transactionPoint="Your Game ID" transactionItem="masayoshizero" />
          <TransactionList transactionPoint="Order ID" transactionItem="#GG001" />
          <TransactionList transactionPoint="Item" transactionItem="250 Diamonds" />
          <TransactionList transactionPoint="Price" transactionItem="Rp 42.280.500" />
          <TransactionList transactionPoint="Tax (10%)" transactionItem="Rp 4.228.000" />
          <TransactionList transactionPoint="Total" transactionItem="Rp 55.000.600" />
        </div>
        <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
          <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
          <TransactionList transactionPoint="Your Account Name" transactionItem="Masayoshi Angga Zero" />
          <TransactionList transactionPoint="Type" transactionItem="Worldwide Transfer" />
          <TransactionList transactionPoint="Bank Name" transactionItem="Mandiri" />
          <TransactionList transactionPoint="Bank Account Name" transactionItem="PT Store GG Indonesia" />
          <TransactionList transactionPoint="Bank Number" transactionItem="1800 - 9090 - 2021" />
        </div>
        <label className="checkbox-label text-lg color-palette-1">
          I have transferred the money
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <div className="d-md-block d-flex flex-column w-100 pt-50">
          <Button buttonName="Confirm Payment" className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg" action={handleRouter} />
        </div>
      </div>
    </section>
  );
}
