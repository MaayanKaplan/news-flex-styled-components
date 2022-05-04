import React from "react";
import Button from "../../Common/Button/Button";
import * as S from "./styles";

const ContentBox = ({
  secondaryTitle,
  primaryTitle,
  description,
  button,
  margin,
}) => {
  return (
    <S.ContentWrapper>
      <S.SecondaryTitle>{secondaryTitle}</S.SecondaryTitle>
      <S.PrimaryTitle>{primaryTitle}</S.PrimaryTitle>
      <S.Description>{description}</S.Description>
      {margin && <S.Margin></S.Margin>}
      {button && <Button text={button} />}
    </S.ContentWrapper>
  );
};

export default ContentBox;
