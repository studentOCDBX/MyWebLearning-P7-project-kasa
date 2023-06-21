import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import colors from "../../utils/style/colors.js";

const NavLinkWrapper = styled.nav`
  left: 931px;
  top: 17px;
  width: 309px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 34px;
  font-weight: 500;
  font-size: 24px;
`;

const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
`;

function Navbar() {
  return (
    <NavLinkWrapper>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/à propos">A Propos</StyledLink>
    </NavLinkWrapper>
  );
}

export default Navbar;
