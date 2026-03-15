import { useState } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import { ButtonSquare } from "../buttons/ButtonSquare";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <ButtonSquare
        icon="src/assets/plus.svg"
        alt="Открыть сайд менюшку"
        size="large"
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
      />
      {isOpen && (
        <nav>
          <Link to="/">Todos</Link>
          <Link to="/notes">Sticky Notes</Link>
        </nav>
      )}
    </div>
  );
}
