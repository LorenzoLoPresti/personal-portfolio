import AppLayout from "./components/pages/AppLayout";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./components/organisms/Project";
import Projects from "./components/templates/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/project/:id" element={<Project />} />
          <Route path="/" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
