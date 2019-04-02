import React from "react";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";
import { Wrapper } from "../Wrapper";
import { Header4 } from "../Typography";

const NavLink = styled.a`
  text-decoration: none;
  color: #32496a;
  font-size: 18px;
  line-height: 26px;
  display: block;
  font-family: SFProLight, sans-serif;
`;

const LinkBlock = styled.div`
  padding-top: 24px;
`;

const FooterItems = styled.div`
  margin-top: 24px;
  padding-bottom: 16px;
  max-width: 260px;
  @media (min-width: 992px) {
    height: 400px;
  }
`;

const Footer = () => (
  <Wrapper color="#d3d3d3">
    <Container>
      <Row>
        <Col sm={4}>
          <FooterItems>
            <Header4>Lorum Ipsum product</Header4>
          </FooterItems>
        </Col>
        <Col sm={4}>
          <FooterItems>
            <Header4>De kleine lettertjes</Header4>
            <LinkBlock>
              <NavLink to={"/"}>voorwaarden</NavLink>
              <NavLink to={"/"}>Privacy statement</NavLink>
              <NavLink to={"/"}>Gebruikersvoorwaarden</NavLink>
              <NavLink to={"/"}>Fraudebeleid</NavLink>
            </LinkBlock>
          </FooterItems>
        </Col>
        <Col sm={4}>
          <FooterItems>
            <Header4>Social Media</Header4>
            <LinkBlock>
              <NavLink to={"/"}>Facebook</NavLink>
              <NavLink to={"/"}>Instagram</NavLink>
              <NavLink to={"/"}>Twitter</NavLink>
            </LinkBlock>
          </FooterItems>
        </Col>
      </Row>
    </Container>
  </Wrapper>
);
export default Footer;
