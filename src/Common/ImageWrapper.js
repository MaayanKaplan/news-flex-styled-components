import React from "react";
import styled from "styled-components";

export const StyledImageWrapper = styled.div`
  margin-bottom: 16px;
`;

const ImageWrapper = ({ src, alt }) => {
  return (
    <StyledImageWrapper>
      <img src={src} alt="laptop-img" />
    </StyledImageWrapper>
  );
};

export default ImageWrapper;
