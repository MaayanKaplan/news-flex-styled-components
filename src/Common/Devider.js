import React from "react";
import styled from "styled-components";

export const StyledDevider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #0e1649;
  opacity: 0.2;
  margin: 40px 0;
`;

const Devider = (props) => {
  return <StyledDevider></StyledDevider>;
};

export default Devider;
