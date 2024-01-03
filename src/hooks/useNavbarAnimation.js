import { useEffect, useState } from "react";

export function useNavbarAnimation() {
  const [isActive, setIsActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onUpdateActiveLink(value) {
    setIsActive(value);
  }

  return { isActive, scrolled, onUpdateActiveLink };
}
