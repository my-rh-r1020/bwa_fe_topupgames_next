import React from "react";

export default function TransactionList({ transactionPoint, transactionItem }) {
  return (
    <p className="text-lg color-palette-1 mb-20">
      {transactionPoint} <span className="purchase-details">{transactionItem}</span>
    </p>
  );
}
