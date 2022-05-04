import styled, { css } from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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

export const Description = styled.p`
  ${(props) =>
    props.margin &&
    css`
      margin-bottom: 16px;
    `}
`;

export const Margin = styled.div`
  margin-bottom: 16px;
`;
