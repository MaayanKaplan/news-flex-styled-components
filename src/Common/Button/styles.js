import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  align-items: center;
  padding: 16px 32px;
  border-radius: 12px;
  background-color: #ff9f00;

  color: #fff;
  font-weight: bold;
  text-transform: uppercase;

  transition: all 0.3s;

  align-self: start;

  &:hover {
    background-color: #f08e0e;
  }
  &:focus {
    outline: none;
    outline: 2px solid #d87a00;
    outline-offset: -2px;
    background-color: #f08e0e;
  }
  &:active {
    background-color: #ffbb33;
  }

  /* ${(props) =>
    props.button &&
    css`
      display: block;
    `} */
`;
