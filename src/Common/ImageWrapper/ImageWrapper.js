import React from "react";
import * as S from "./styles";

const ImageWrapper = ({ src, alt }) => {
  return (
    <S.ImageWrapper>
      <img src={src} alt="laptop-img" />
    </S.ImageWrapper>
  );
};

export default ImageWrapper;
