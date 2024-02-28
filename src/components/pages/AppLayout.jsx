import NavBar from "../templates/Navbar";
import HeadingSection from "../templates/HeadingSection";
import Skills from "../templates/Skills";
import Footer from "../templates/Footer";
import GoUp from "../molecules/GoUp";
import { Outlet } from "react-router-dom";
import Contact from "../templates/Contact";

function AppLayout() {
  return (
    <>
      <NavBar />
      <HeadingSection />
      <Skills />
      <Outlet />
      <Contact />
      <Footer />
      <GoUp />
    </>
  );
}

export default AppLayout;
