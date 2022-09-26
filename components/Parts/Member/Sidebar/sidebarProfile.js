// Library
import React from "react";

export default function ProfileUser({ dataPlayer }) {
  const API_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;

  return (
    <div className="user text-center pb-50 pe-30">
      <img src={`${API_IMAGE}/avatar/${dataPlayer.avatar}`} width="90" height="90" className="img-fluid mb-20" alt="avatar" />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{dataPlayer.name}</h2>
      <p className="color-palette-2 m-0">{dataPlayer.email}</p>
    </div>
  );
}
