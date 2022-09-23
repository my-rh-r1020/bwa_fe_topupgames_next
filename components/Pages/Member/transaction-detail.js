// Library
import React from "react";
import Link from "next/link";

// Component
import SidebarNavigation from "../../Parts/Member/Sidebar";
import TransactionList from "../../Parts/Member/Transactions/transactionList";

export default function TransactionDetailPage() {
  return (
    <section className="transactions-detail overflow-auto">
      <SidebarNavigation />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Details #GG001</h2>
          <div className="details">
            <div className="main-content main-content-card overflow-auto">
              <section className="checkout mx-auto">
                <div className="d-flex flex-row align-items-center justify-content-between mb-30">
                  <div className="game-checkout d-flex flex-row align-items-center">
                    <div className="pe-4">
                      <div className="cropped">
                        <img src="/images/Thumbnail-3.png" width="200" height="130" className="img-fluid" alt="" />
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
                  <div>
                    <p className="fw-medium text-center label pending m-0 rounded-pill">Pending</p>
                  </div>
                </div>
                <hr />
                <div className="purchase pt-30">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
                  <TransactionList transactionPoint="Your Game ID" transactionItem="masayoshizero" />
                  <TransactionList transactionPoint="Order ID" transactionItem="#GG001" />
                  <TransactionList transactionPoint="Item" transactionItem="250 Diamonds" />
                  <TransactionList transactionPoint="Price" transactionItem="Rp 42.280.500" />
                  <TransactionList transactionPoint="Tax (10%)" transactionItem="Rp 4.228.000" />
                  <TransactionList transactionPoint="Total" transactionItem="Rp 55.000.600" />
                </div>
                <div className="payment pt-10 pb-10">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                  <TransactionList transactionPoint="Your Account Name" transactionItem="Masayoshi Angga Zero" />
                  <TransactionList transactionPoint="Type" transactionItem="Worldwide Transfer" />
                  <TransactionList transactionPoint="Bank Name" transactionItem="Mandiri" />
                  <TransactionList transactionPoint="Bank Account Name" transactionItem="PT Store GG Indonesia" />
                  <TransactionList transactionPoint="Bank Number" transactionItem="1800 - 9090 - 2021" />
                </div>
                <div className="d-md-block d-flex flex-column w-100">
                  <Link href="#">
                    <a className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg" role="button">
                      WhatsApp ke Admin
                    </a>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
