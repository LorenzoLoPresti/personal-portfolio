import { useEffect, useState } from "react";

export function useGoUp() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 400 && window.innerWidth > 1200) {
        setAllowed(true);
      } else {
        setAllowed(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { allowed };
}
