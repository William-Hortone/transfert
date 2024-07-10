import React from "react";
import "./preHeader.css";

const PreHeader = () => {
  return (
    <>
      <section className="app__home-container">
        {/* Sliding text */}
        <div className="content">
          <div className="app__slidingText">
            <div className="app__slidingText-container">
              <div className="sliding-content">
                <span>
                  &nbsp;Design and Implementation Of Score Management system of
                  -&nbsp;
                </span>
                <span>Engineering Education Engineering Education -&nbsp;</span>
              </div>
              <div className="sliding-content">
                <span>
                  &nbsp;Design and Implementation Of Score Management system of
                  -&nbsp;
                </span>
                <span>Engineering Education Engineering Education -&nbsp;</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreHeader;
