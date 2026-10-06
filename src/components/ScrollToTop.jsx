import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router does not reset the scroll position when the route changes.
 * Put this once inside <BrowserRouter>, above <Routes>.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Let in-page anchors (#section) scroll to their element instead
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;