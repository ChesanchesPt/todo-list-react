import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "close" : "open"}
      </button>

      {isOpen && (
        <nav>
          <Link to="/">Todos</Link>
          <Link to="/notes">Sticky Notes</Link>
        </nav>
      )}
    </div>
  );
}
