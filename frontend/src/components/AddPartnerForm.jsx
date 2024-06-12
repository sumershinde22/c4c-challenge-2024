import { useState } from "react";

function AddPartnerForm({ onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [active, setActive] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPartner = {
      name,
      description,
      thumbnailUrl,
      active,
    };

    onAdd(newPartner);

    // Clear form fields
    setName("");
    setDescription("");
    setThumbnailUrl("");
    setActive(false);
  };

  return (
    <form onSubmit={handleSubmit} className="add-partner-form">
      <label>
        Partner name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Partner description
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Partner Logo Source
        <input
          type="text"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
          required
        />
      </label>
      <label>
        Active?
        <input
          type="checkbox"
          checked={active}
          onChange={(e) => setActive(e.target.checked)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddPartnerForm;
