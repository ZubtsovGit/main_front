import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import InternationalBachelor from "./pages/InternationalBachelor";
import Disciplines from "./pages/Disciplines";
import Login from "./pages/Login";
import Teachers from "./pages/Teachers";
import AboutDepartment from "./pages/AboutDepartment";
import StepIntoFuture from "./pages/StepIntoFuture";
import News from "./pages/News";
import Postgrad from "./pages/Postgrad";
import Magistracy from "./pages/Magistracy";
import Bachlor from "./pages/Bachlor";
import SecondBachelor from "./pages/SecondBachelor";
import ScientificWork from "./pages/ScientificWork";

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
      case "/internationalbachelor":
        title = "";
        metaDescription = "";
        break;
      case "/disciplines":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/teachers":
        title = "";
        metaDescription = "";
        break;
      case "/aboutdepartment":
        title = "";
        metaDescription = "";
        break;
      case "/stepintofuture":
        title = "";
        metaDescription = "";
        break;
      case "/news":
        title = "";
        metaDescription = "";
        break;
      case "/postgrad":
        title = "";
        metaDescription = "";
        break;
      case "/magistracy":
        title = "";
        metaDescription = "";
        break;
      case "/bachlor":
        title = "";
        metaDescription = "";
        break;
      case "/secondbachelor":
        title = "";
        metaDescription = "";
        break;
      case "/scientificwork":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
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
      <Route
        path="/internationalbachelor"
        element={<InternationalBachelor />}
      />
      <Route path="/disciplines" element={<Disciplines />} />
      <Route path="/login" element={<Login />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/aboutdepartment" element={<AboutDepartment />} />
      <Route path="/stepintofuture" element={<StepIntoFuture />} />
      <Route path="/news" element={<News />} />
      <Route path="/postgrad" element={<Postgrad />} />
      <Route path="/magistracy" element={<Magistracy />} />
      <Route path="/bachlor" element={<Bachlor />} />
      <Route path="/secondbachelor" element={<SecondBachelor />} />
      <Route path="/scientificwork" element={<ScientificWork />} />
    </Routes>
  );
}
export default App;
