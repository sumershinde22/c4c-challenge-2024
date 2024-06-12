import React from "react";

function PartnerTile({ partnerData, onDelete }) {
  return (
    <div className="partner-tile">
      <img
        className="partner-thumbnail"
        src={partnerData.thumbnailUrl}
        alt={partnerData.name}
      />
      <hr />
      <div className="partner-info">
        <h3>{partnerData.name}</h3>
        <h3 style={{ color: partnerData.active ? "green" : "red" }}>
          {partnerData.active ? "Active" : "Inactive"}
        </h3>
        <p>{partnerData.description}</p>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default PartnerTile;
