import numeral from "numeral";
import React, { useEffect, useState } from "react";

import TransactionList from "../Member/Transactions/transactionList";

export default function TransactionsList() {
  // Use State
  const [checkoutTopUp, setCheckoutTopUp] = useState({
    form: {
      accountPlayer: "",
    },
    voucherList: {
      nominal: {
        coinName: "",
        coinQuantity: "",
        price: "",
      },
    },
    paymentList: {
      type: "",
      banks: {
        namaBank: "",
        noRekening: "",
        namaRekening: "",
      },
    },
  });

  const getTopupCheckout = () => {
    // Get TopUp Data from LocalStorage
    const topupDataStorage = localStorage.getItem("topup-data"),
      topupStorageParse = JSON.parse(topupDataStorage);

    // Set to UseState
    setCheckoutTopUp(topupStorageParse);
  };

  useEffect(() => {
    getTopupCheckout();
  }, []);

  // Purchase Counting
  const taxPurchase = checkoutTopUp.voucherList.nominal.price * (11 / 100),
    totalPurchase = checkoutTopUp.voucherList.nominal.price + taxPurchase;

  return (
    <div>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
        <TransactionList transactionPoint="Your Game ID" transactionItem={checkoutTopUp.form.accountPlayer} />
        <TransactionList transactionPoint="Order ID" transactionItem="#GG001" />
        <TransactionList transactionPoint="Item" transactionItem={`${checkoutTopUp.voucherList.nominal.coinQuantity} ${checkoutTopUp.voucherList.nominal.coinName}`} />
        <TransactionList transactionPoint="Price" transactionItem={`Rp ${numeral(checkoutTopUp.voucherList.nominal.price).format("0,0")}`} />
        <TransactionList transactionPoint="Tax (11%)" transactionItem={`Rp ${numeral(taxPurchase).format("0,0")}`} />
        <TransactionList transactionPoint="Total" transactionItem={`Rp ${numeral(totalPurchase).format("0,0")}`} />
      </div>

      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
        {/* <TransactionList transactionPoint="Your Account Name" transactionItem="Miyamoto" /> */}
        <TransactionList transactionPoint="Type" transactionItem={checkoutTopUp.paymentList.type} />
        <TransactionList transactionPoint="Bank Name" transactionItem={checkoutTopUp.paymentList.banks.namaBank} />
        <TransactionList transactionPoint="Bank Account Name" transactionItem={checkoutTopUp.paymentList.banks.namaRekening} />
        <TransactionList transactionPoint="Bank Number" transactionItem={checkoutTopUp.paymentList.banks.noRekening} />
      </div>
    </div>
  );
}
