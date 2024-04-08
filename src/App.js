import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Physique from "./Components/Physique";
import FitFive from "./Components/FitFive";
import Mind from "./Components/Mind";
import Recovery from "./Components/Recovery";
import { Route, Switch } from "react-router-dom";
import Spirit from "./Components/Spirit";
import SingleProduct from "./Components/SingleProduct";
import Nutrition from "./Components/Nutrition";
import Products from "./Components/Products";
import { useEffect, useState } from "react";
import PreLoader from "./Components/PreLoader";
import ClassesPage from "./Components/ClassesPage";
import Question from "./Components/Question";
import SubSpecialists from "./Components/SubSpecialists";
import SpecialistsPage from "./Components/SpecialistsPage";
import TestPage from "./Components/TestPage";
import Calender from "./Components/Calender";
import FitFiveLanding from "./Components/FitFiveLanding";
import BackToTop from "./Components/BackToTop";
import HomePage from "./Components/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("fix-screen");
    }, 2400);
  }, []);
  AOS.init({
    once: true,
    // disable: "mobile",
  });
  return (
    <>
      {loading && <PreLoader />}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/HomePage" component={FitFiveLanding} />
        <Route exact path="/Physique" component={Physique} />
        <Route exact path="/Mind" component={Mind} />
        <Route exact path="/Spirit" component={Spirit} />
        <Route exact path="/Recovery" component={Recovery} />
        <Route exact path="/Nutrition" component={Nutrition} />
        <Route exact path="/Stability" component={FitFive} />
        <Route exact path="/Shop" component={Products} />
        <Route exact path="/SingleProduct" component={SingleProduct} />
        <Route exact path="/Classes" component={ClassesPage} />
        <Route exact path="/Questions" component={Question} />
        <Route exact path="/SubSpecialists" component={SubSpecialists} />
        <Route exact path="/Specialists" component={SpecialistsPage} />
        <Route exact path="/Physiological" component={TestPage} />
        <Route exact path="/Calender" component={Calender} />
      </Switch>
      <BackToTop />
    </>
  );
}

export default App;
