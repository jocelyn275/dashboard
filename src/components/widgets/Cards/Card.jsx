import React from "react";
import "./Card.css";
import styled from "styled-components";
//import ThemedButton from "../Button";

const Button = styled.button`
  background-color: #333e47;
  color: #fff;
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 5px;
  outline: none;
  border: none;
  width: 35%;
  height: 40px;
  margin-left: 5px;
  @media screen and (max-width: 991px) {
    width: 100%;
    margin: 0;
  }
`;

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h6>{props.cardTitle}</h6>
        </div>
        <div class="img-container">
          <img src={props.cardImage} class="card-image" />
          <div
            class="card-overlay"
            style={{ backgroundColor: props.hoverColor }}
          >
            <img src={props.icon} class="card-icon" />
          </div>
        </div>
        <div className="card-body">
          <div className="card-content">
            <p>{props.desc}</p>
            <Button style={{ backgroundColor: props.btnColor }}>
              {props.btnTitle}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
