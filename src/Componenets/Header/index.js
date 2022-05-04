import React from "react";
import * as S from "./styles";
import logo from "../../Images/logo.png";

const Header = () => {
  return (
    <S.NavContainer>
      <S.ImageWrapper>
        <img src={logo} alt="logo" />
      </S.ImageWrapper>
      <S.Nav>
        <S.NavLink>Courses</S.NavLink>
        <S.NavLink>Careers</S.NavLink>
        <S.NavLink>About us</S.NavLink>
        <S.NavLink>Contact us</S.NavLink>
      </S.Nav>
    </S.NavContainer>
  );
};

export default Header;
