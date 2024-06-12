import { useState } from "react";

function SearchForm({ onSearch }) {
  const [title, setTitle] = useState("");
  const [active, setActive] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch({ title, active });
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Search by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={active} onChange={(e) => setActive(e.target.value)}>
        <option value="">All</option>
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
