import React from "react";
import "../widgets/Cards/CardLink.css";

const Links = (props) => {
  return (
    <>
      <div className="link-body">
        <div className="link-content">
          <img src={props.icon} className="link-icon" />
          <div className="link-title">{props.title}</div>
        </div>
      </div>
    </>
  );
};

export default Links;
