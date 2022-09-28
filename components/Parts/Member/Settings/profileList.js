import React from "react";

export default function ProfileList({ profilePoint, profileItem }) {
  return (
    <p className="text-lg color-palette-1 mb-20">
      {profilePoint} <span className="purchase-details">{profileItem}</span>
    </p>
  );
}
