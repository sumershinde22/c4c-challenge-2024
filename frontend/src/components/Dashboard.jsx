import { useState, useEffect } from "react";
import PartnerTile from "./PartnerTile";
import AddPartnerForm from "./AddPartnerForm.jsx";
function Dashboard() {
  const [partners, setPartners] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setPartners(data))
      .catch((error) => console.error("Error fetching partner data:", error));
  }, []);

  const deletePartner = (key) => {
    fetch(`http://localhost:4000/${key}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setPartners((prevPartners) => {
            const updatedPartners = { ...prevPartners };
            delete updatedPartners[key];
            return updatedPartners;
          });
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
      .then((data) => {
        setPartners((prevPartners) => ({
          ...prevPartners,
          [data.key]: data.partner,
        }));
      })
      .catch((error) => console.error("Error adding partner:", error));
  };

  return (
    <div id="main-content">
      <div id="centered">
        <AddPartnerForm onAdd={addPartner} />
      </div>
      <div id="main-partners-grid">
        {Object.entries(partners).map(([key, partnerData]) => (
          <PartnerTile
            key={key}
            partnerData={partnerData}
            onDelete={() => deletePartner(key)}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
