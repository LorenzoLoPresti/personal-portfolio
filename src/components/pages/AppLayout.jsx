import GoUp from "../molecules/GoUp";
import { Outlet } from "react-router-dom";
import NavBar from "../organisms/Navbar";
import HeadingSection from "../organisms/HeadingSection";
import Contact from "../organisms/Contact";
import Footer from "../organisms/Footer";
import Skills from "../organisms/Skills";

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
