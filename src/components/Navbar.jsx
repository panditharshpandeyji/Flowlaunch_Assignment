import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  padding: 10px 0;
  text-align: center;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Heading>Task List Manager</Heading>
    </NavbarContainer>
  );
};

export default Navbar;
