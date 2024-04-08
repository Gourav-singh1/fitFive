import React from "react";
import LastFooter from "./LastFooter";
import PsychologicalTest from "./PsychologicalTest";
import TestCards from "./TestCards";

function TestPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow_x_hidden">
        <PsychologicalTest />
        <TestCards />
        <div className="bg-black">
          <LastFooter />
        </div>
      </div>
    </>
  );
}

export default TestPage;
