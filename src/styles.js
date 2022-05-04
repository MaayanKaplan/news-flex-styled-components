import styled from "styled-components";
import { css } from "styled-components";

export const Title = styled.h1`
  margin: 64px 258px 64px 64px;
  font-family: Courier New;
  font-size: 2.4rem;
  font-weight: bold;
  letter-spacing: -0.48px;
  color: #0e1649;
`;

export const Container = styled.div`
  width: 1920px;
  height: 1757px;
`;

export const MainContainer = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  height: 100%;
  margin: 0 16px 0 64px;

  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MiddleContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const RightConatiner = styled.div`
  height: 100%;
  margin: 0 64px 0 16px;

  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Devider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #0e1649;
  opacity: 0.2;
  margin: 39px 0 40px 0;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Link = styled.a`
  color: #ff7748;
`;
