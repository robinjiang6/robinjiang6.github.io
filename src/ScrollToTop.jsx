import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// taken from react documentation
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}