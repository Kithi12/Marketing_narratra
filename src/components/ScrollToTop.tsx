import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediately scroll to top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For Safari

    // Optional: Handle any dynamic content loading
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
