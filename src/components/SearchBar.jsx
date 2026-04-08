import { useState, useEffect } from "react";
import { Search } from "lucide-react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) onSearch(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={() => onSearch(query)} className="search-btn">
        <Search size={18} />
        Search
      </button>
    </div>
  );
}

export default SearchBar;