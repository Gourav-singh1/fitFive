import React from "react";
import FitNav from "./FitNav";
import LastFooter from "./LastFooter";
import PhysiqueNav from "./PhysiqueNav";
import QuestionsHero from "./QuestionsHero";

const Question = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PhysiqueNav />
      <QuestionsHero />
      <LastFooter />
    </>
  );
};

export default Question;
