import AppLayout from "./components/pages/AppLayout";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./components/organisms/Project";
import AllProjects from "./components/organisms/AllProjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/project/:id" element={<Project />} />
          <Route path="/" element={<AllProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
