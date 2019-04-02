import React from "react";
import styled from "styled-components";


const ButtonLink = styled.a`
  text-decoration: none;
`;

const ButtonLayout = styled.div`
  padding: 10px 8px;
  font-family: SFProBold, sans-serif;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  color: #ffffff;
  background-color: yellowgreen;
  max-width: ${props => (props.maxWidth ? props.maxWidth : "200px")};
  border-radius: 4px;
`;

const Button = props => {
  return (
    <div>
      {props.href ? (
        <ButtonLink to={props.href}>
          <ButtonLayout maxWidth={props.maxWidth}>{props.title}</ButtonLayout>
        </ButtonLink>
      ) : (
        <ButtonLayout maxWidth={props.maxWidth}>{props.title}</ButtonLayout>
      )}
    </div>
  );
};

export default Button;
