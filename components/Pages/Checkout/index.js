// Library
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import Button from "../../Basics/Button";
import TransactionsList from "../../Parts/Checkout/transactionsList";
import { toast } from "react-toastify";
import { postData } from "../../../services/fetchData";
import Cookies from "js-cookie";

export default function CheckoutPage() {
  // API URL
  const ROOT_API = process.env.NEXT_PUBLIC_API_PRO,
    API_VERSION = "api/v1-player",
    API_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;
  const { query } = useRouter(),
    router = useRouter(),
    // Use State
    [checkoutGame, setCheckoutGame] = useState([]),
    [checkbox, setCheckbox] = useState(false);

  const getGameCheckout = () => {
    // Get Game Data from localStorage
    const gameDataStorage = localStorage.getItem("game-data"),
      // Parse to Object
      gameStorageParse = JSON.parse(gameDataStorage);

    // Set to UseState
    setCheckoutGame(gameStorageParse);
  };

  useEffect(() => {
    getGameCheckout();
  }, []);

  // Handle Submit
  const handleSubmit = async () => {
    try {
      // Get Topup Data from LocalStorage
      const topupDataLocal = localStorage.getItem("topup-data"),
        topupDataParse = JSON.parse(topupDataLocal);

      // Purchase Counts
      const taxPrice = topupDataParse.voucherList.price * (11 / 100),
        totalPrice = topupDataParse.voucherList.price + taxPrice;

      if (!checkbox) {
        toast.error("Please Checked 'I Have Transferred The Money'", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      // Set Data
      const payload = {
        accountPlayer: topupDataParse.form.accountPlayer,
        tax: taxPrice,
        value: totalPrice,
        game: query.id,
        voucher: topupDataParse.voucherList._id,
        payment: topupDataParse.paymentList._id,
        banks: topupDataParse.paymentList.banks._id,
      };

      // Get Token
      const tokenLocal = Cookies.get("xpToken"),
        token = atob(tokenLocal);

      const resCheckout = await postData(`${ROOT_API}/${API_VERSION}/player/checkout`, payload, token);

      console.log(resCheckout);

      if (resCheckout) {
        toast.success("Your Payment is Confirmed. Thank You", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Redirect to Success Checkout
        router.push("/checkout/success-checkout");
      }
    } catch (err) {}
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

        {checkoutGame.map((gameItem) => (
          <>
            <div key={gameItem._id} className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
              <div className="pe-4">
                <div className="cropped">
                  <img src={`${API_IMAGE}/cover-games/${gameItem.coverGames}`} className="img-fluid" alt="cover-game" />
                </div>
              </div>
              <div>
                <p className="fw-bold text-xl color-palette-1 mb-10">{gameItem.gameName}</p>
                <p className="color-palette-2 m-0">Category: {gameItem.category.name}</p>
              </div>
            </div>
          </>
        ))}
        <hr />
        <TransactionsList />

        <label className="checkbox-label text-lg color-palette-1">
          I have transferred the money
          <input type="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
          <span className="checkmark"></span>
        </label>
        <div className="d-md-block d-flex flex-column w-100 pt-50">
          <Button buttonName="Confirm Payment" className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg" action={handleSubmit} />
        </div>
      </div>
    </section>
  );
}
