import React from "react";
import "./audacityStyle.scss";
const Body = () => {
  return (
    <body>
      <section className="content__audacity">
        <div className="audacity">
          <div className="audio">
            <h1 className="nameAudacity">Audacity name</h1>
            <h3 className="descAudacity">Description audacity</h3>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Body;
