import NavBar from "../Templates/Navbar";
import HeadingSection from "../Templates/HeadingSection";
import Skills from "../Templates/Skills";
import Projects from "../Templates/Projects";
import Contact from "../Templates/contact";
import Footer from "../Templates/Footer";
import GoUp from "../molecules/GoUp";

function AppLayout() {
  return (
    <>
      <NavBar />
      <HeadingSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <GoUp />
    </>
  );
}

export default AppLayout;
