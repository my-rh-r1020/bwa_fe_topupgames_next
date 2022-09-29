import React from "react";

export default function TableContent({ key, urlImage, gameName, gameCategory, coinQuantity, coinName, price, status }) {
  return (
    <tr key={key} className="align-middle text-center">
      <th scope="row">
        <img className="float-start me-3 mb-lg-0 mb-3" src={urlImage} width="80" height="60" alt="cover-game" />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">{gameName}</p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{gameCategory}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          {coinQuantity} {coinName}
        </p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={`float-start icon-status ${status === "success" ? "success" : "pending"}`}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">{status}</p>
        </div>
      </td>
    </tr>
  );
}
