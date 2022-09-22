// Library
import React from "react";
import Link from "next/link";

export default function ListStatusItem({ dataCategory, urlImage, gameName, gameCategory, coinQuantity, coinName, price, spanStatus, status, href }) {
  return (
    <tr data-category={dataCategory} className="align-middle">
      <th scope="row">
        <img className="float-start me-3 mb-lg-0 mb-3" src={`/images/${urlImage}.png`} width="80" height="60" alt="" />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">{gameName}</p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{gameCategory}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          {coinQuantity} {coinName}
        </p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">{`Rp ${price}`}</p>
      </td>
      <td>
        <div>
          <span className={`float-start icon-status ${spanStatus}`}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">{status}</p>
        </div>
      </td>
      <td>
        <Link href={href}>
          <a className="btn btn-status rounded-pill text-sm">Details</a>
        </Link>
      </td>
    </tr>
  );
}
