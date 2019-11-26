import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import styled from 'styled-components'

const StyledBrand = styled.div`
  width: 50px;
  height: 41px;
  left: 12px;
  top: calc(50% - 41px / 2);
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
`

const PageNameText = ({ childrens }) => {
  return <PageName>{childrens}</PageName>
}

const PageName = styled.p`
  width: 148px;
  height: 22px;
  left: calc(50% - 148px / 2);
  top: calc(50% - 22px / 2 + 0.5px);
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ff473a;
`

const MainNavBarMobile = ({ pageName }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home2">
          <StyledBrand>
            THE
            <br />
            ART
            <br />
            MUSEUM
          </StyledBrand>
        </Navbar.Brand>
        <PageName> {pageName}</PageName>
        {/* <PageNameText childrens="test" /> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MainNavBarMobile
