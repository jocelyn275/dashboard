import React, { useState } from "react";
import "./CardLink.css";
import styled from "styled-components";
import Links from "../Links";
import { CardLinkData } from "./CardLinkData";

const CardLinks = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="card-link">
        <div className="card-link-body">
          <h6>
            Quick Links<span style={{ color: "#ea4c6e" }}>.</span>
          </h6>
          <p>
            Useful directory of business applications used throughout the
            business
          </p>
          <a
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <div className="link-body">
              {CardLinkData.map((link) => (
                <Links key={link.id} title={link.title} icon={link.icon} />
              ))}
            </div>
          </a>
          {isShown && (
            <div className="hover-link">
              {/* {CardLinkData.state.links[this.state.index].hoverDesc} */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardLinks;
