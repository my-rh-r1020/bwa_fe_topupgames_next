// Library
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

// Components
import DetailGameItem from "../../Parts/DetailGame/detailGameItem";
import CheckoutForm from "../../Forms/Checkout";
import { getDetailGame } from "../../../services/fetchData";

export default function DetailGamePage() {
  const API_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;
  const { query, isReady } = useRouter(),
    // Use State
    [form, setForm] = useState({ accountPlayer: "" }),
    [gameList, setGameList] = useState([]);

  // Callback API
  const getDetailGameData = useCallback(async (id) => {
    const data = await getDetailGame(id);
    setGameList(data.resultGame);
  }, []);

  useEffect(() => {
    if (isReady) {
      getDetailGameData(query.id);
    } else {
      console.log("Router is not ready");
    }
  }, [isReady]);

  // Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = () => {
    // router.push("/checkout");
  };
  return (
    <section className="detail pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="detail-header pb-50">
          <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up Now</h2>
          <p className="text-lg color-palette-1 mb-0">Perkuat akun anda dan jadilah pemenang</p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
            {/* V1 */}
            {/* <DetailGameItem data={gameList} /> */}

            {/* V2 */}
            {gameList.map((item, i) => (
              <DetailGameItem key={i._id} urlImage={`${API_IMAGE}/cover-games/${item.coverGames}`} gameName={item.gameName} category={item.category.name} />
            ))}
          </div>

          <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
            {/* Checkout Form */}
            <CheckoutForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
}
