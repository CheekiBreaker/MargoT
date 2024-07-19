import React from "react";
import "./BodyStyle.scss";
import LeftPanel from "../sideBar/leftPanelBar";
const Body = () => {
  return (
    <body>
      <section className="content">
        <LeftPanel />
        <div className="hello__person">
          <div className="hello__instruction">
            <div className="instr__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              expedita similique molestias assumenda nihil quas magnam nobis
              maiores dolores ducimus eos error rem, nemo, porro a ullam. Error,
              eius accusantium!
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};
export default Body;
