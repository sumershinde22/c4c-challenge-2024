import { useState, useEffect } from "react";
import PartnerTile from "./PartnerTile";
import AddPartnerForm from "./AddPartnerForm.jsx";

function Dashboard() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setPartners(data))
      .catch((error) => console.error("Error fetching partner data:", error));
  }, []);

  const deletePartner = (id) => {
    fetch(`http://localhost:4000/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setPartners((prevPartners) =>
            prevPartners.filter((partner) => partner.id !== id)
          );
        } else {
          console.error("Failed to delete partner");
        }
      })
      .catch((error) => console.error("Error deleting partner:", error));
  };

  const addPartner = (newPartner) => {
    fetch("http://localhost:4000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPartner),
    })
      .then((res) => res.json())
      .then((data) => setPartners((prevPartners) => [...prevPartners, data]))
      .catch((error) => console.error("Error adding partner:", error));
  };

  const updatePartner = (updatedPartner) => {
    fetch(`http://localhost:4000/${updatedPartner.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPartner),
    })
      .then((res) => res.json())
      .then((data) => {
        setPartners((prevPartners) =>
          prevPartners.map((partner) =>
            partner.id === data.id ? data : partner
          )
        );
      })
      .catch((error) => console.error("Error updating partner:", error));
  };

  return (
    <div className="page-container">
      <div id="centered">
        <AddPartnerForm onAdd={addPartner} />
      </div>
      <div id="main-partners-grid">
        {partners.map((partner) => (
          <PartnerTile
            key={partner.id}
            partnerData={partner}
            onDelete={() => deletePartner(partner.id)}
            onUpdate={updatePartner}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
