import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Sidebar } from "./components/sidebar/SideBar";
import { TodosPage } from "./pages/TodosPage";
import { NotesPage } from "./pages/NotesPage";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div style={{ marginLeft: "200px" }}>
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
