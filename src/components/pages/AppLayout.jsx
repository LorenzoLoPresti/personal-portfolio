import NavBar from "../Templates/Navbar";
import HeadingSection from "../Templates/HeadingSection";
import Skills from "../Templates/Skills";
import Footer from "../Templates/Footer";
import GoUp from "../molecules/GoUp";
import { Outlet } from "react-router-dom";
import Contact from "../Templates/contact";

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
