import React from "react";
import styled from "styled-components";

const ThemedButton = styled.button`
  background-color: #333e47;
  color: #fff;
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  @media (max-width: 420px) {
    // width: 100%;
  }
`;

function changeBackground(e) {
  e.target.style.background = "red";
}

const colour = {
  blue: {
    default: "#00ACAB",
    hover: "#333e47",
  },
  pink: {
    default: "#ea4c6e",
    hover: "#333e47",
  },
};

const Button = ({ color, children }) => {
  return (
    <ThemedButton
      variant="contained"
      color={color}
      onMouseOver={changeBackground}
    >
      {children}
    </ThemedButton>
  );
};

export default Button;
