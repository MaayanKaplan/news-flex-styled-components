import React from "react";
import Button from "../../Common/Button/Button";
import ImageWrapper from "../../Common/ImageWrapper/ImageWrapper";
import Devider from "../../Common/Devider/Devider";
import { Data } from "../../Utils/data";

import * as S from "./styles";

const ContentBox = () => {
  return (
    <>
      {Data.map((data, key) => {
        return (
          <S.ContentWrapper key={key}>
            <S.SecondaryTitle>{data.secondaryTitle}</S.SecondaryTitle>
            <S.PrimaryTitle>{data.primaryTitle}</S.PrimaryTitle>
            <S.Description>{data.description}</S.Description>
            {data.margin && <S.Margin></S.Margin>}
            {data.buttonText && <Button text={data.buttonText} />}
            {data.image && <ImageWrapper src={data.image}></ImageWrapper>}
            {data.devider && <Devider />}
          </S.ContentWrapper>
        );
      })}
    </>
  );
};

export default ContentBox;
