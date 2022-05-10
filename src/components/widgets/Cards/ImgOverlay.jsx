import React from "react";
import styled from "styled-components";
import { useState } from "react";

const ImgOverlay = (props) => {
  return (
    <>
      <div class="img-container" style={props.colour}>
        <img src={props.cardImage} class="card-image" />
        <div class="card-overlay">
          <img src={props.cardIcon} />
        </div>
      </div>
    </>
  );
};

export default ImgOverlay;
