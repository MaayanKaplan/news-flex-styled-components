import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  height: 128px;
  background-color: #0e1649;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 56px;
  padding: 40px 80px;
  cursor: pointer;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: "Assistant", sans-serif;
  font-size: 2.4rem;

  transition: all 0.5s;

  &:hover {
    font-size: 2.6rem;
  }
`;

export const ImageWrapper = styled.div`
  margin: 32px auto 64px 64px;
`;
