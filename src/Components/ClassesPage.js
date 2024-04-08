import React from "react";
import Classes from "./Classes";
import ClassesCards from "./ClassesCards";
import LastFooter from "./LastFooter";

function ClassesPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {" "}
      <div className="overflow_x_hidden">
        <Classes />
        <ClassesCards />
        <div className="bg-black">
          <LastFooter />
        </div>
      </div>
    </>
  );
}

export default ClassesPage;
