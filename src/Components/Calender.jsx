import React from "react";
import { Container } from "react-bootstrap";
import LastFooter from "./LastFooter";
import { InlineWidget } from "react-calendly";
import PhysiqueNav from "./PhysiqueNav";
const Calender = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PhysiqueNav />
      <Container>
        <InlineWidget url="https://calendly.com/jd3347637/fitfive" />
      </Container>
      <div className="bg-black">
        <LastFooter />
      </div>
    </>
  );
};

export default Calender;
