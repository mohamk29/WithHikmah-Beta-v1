import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TafseerGuidesPage from "./pages/TafseerGuidesPage";
import WithHaqqPage from "./pages/WithHaqqPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import HadithPage from "./pages/HadithPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/withhaqq":
        title = "";
        metaDescription = "";
        break;
      case "/tafseerguides":
        title = "";
        metaDescription = "";
        break;
      case "/hadiths":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/withhaqq" element={<WithHaqqPage />} />
      <Route path="/tafseerguides" element={<TafseerGuidesPage />} />
      <Route path="/hadiths" element={<HadithPage />} />
    </Routes>
  );
}
export default App;
