import React from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import ImageWrapper from "../Common/ImageWrapper";
import { Data } from "../Utils/data";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.big ? 2 : 1)};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;

  order: ${(props) => (props.first ? 1 : 2)};

  span {
    color: #ff7748;
    text-decoration: underline;
  }
`;

export const PrimaryTitle = styled.h2`
  text-transform: capitalize;
  letter-spacing: 0.48px;
  font-size: 2.4rem;
  line-height: normal;
  margin-bottom: 16px;
`;

export const SecondaryTitle = styled.p`
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Description = styled.p``;

export const Margin = styled.div`
  margin-bottom: 16px;
`;

export const Devider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #0e1649;
  opacity: 0.2;
  margin: 40px 0;

  display: ${(props) => (props.none ? "none" : "inline")};
`;

const ContentBox = () => {
  return (
    <>
      {Data.map((data, key) => {
        return (
          <Container big={data.flex}>
            <ContentWrapper key={key}>
              {data.devider && <Devider />}
              <SecondaryTitle>{data.secondaryTitle}</SecondaryTitle>
              <PrimaryTitle>{data.primaryTitle}</PrimaryTitle>
              <Description>{data.description}</Description>
              {data.margin && <Margin></Margin>}
              {data.buttonText && <Button text={data.buttonText} />}
              <Devider none={data.visibility}></Devider>
            </ContentWrapper>

            <ContentWrapper key={key} first={data.order}>
              {data.image && <ImageWrapper src={data.image}></ImageWrapper>}
              <SecondaryTitle>{data.secondSecondaryTitle}</SecondaryTitle>
              <PrimaryTitle>{data.secondPrimaryTitle}</PrimaryTitle>
              <Description>{data.secondDescription}</Description>
            </ContentWrapper>
          </Container>
        );
      })}
    </>
  );
};

export default ContentBox;
