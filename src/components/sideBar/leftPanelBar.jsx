import React from "react";
import "./leftPanelStyle.scss";
const LeftPanel = () => {
  return (
        <div className="left__panel">
          <div className="inputs">
            <div className="left__panel__name">Name</div>
            <div>
              <input className="panel__input" type="checkbox" name="1" id="" />
              <span className="ex__name"> Название урока</span>
            </div>
            <div>
              <input className="panel__input" type="checkbox" name="2" id="" />
              <span className="ex__name"> Название урока</span>
            </div>
            <div>
              <input className="panel__input" type="checkbox" name="3" id="" />
              <span className="ex__name"> Название урока</span>
            </div>
            <div>
              <input className="panel__input" type="checkbox" name="4" id="" />
              <span className="ex__name"> Название урока</span>
            </div>
            <div>
              <input className="panel__input" type="checkbox" name="5" id="" />
              <span className="ex__name"> Название урока</span>
            </div>
          </div>
        </div>
  );
};
export default LeftPanel;
