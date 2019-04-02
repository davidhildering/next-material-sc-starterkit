import React from "react";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";
import Button from "../Button";
import { Wrapper } from "../Wrapper";
import { Header3, Paragraph } from "../Typography";

const Benefit = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 16px;
  margin-bottom: 16px;
  text-align: center;
  height: 300px;
  border-radius: 16px;
  box-sizing: border-box;
  img {
    padding: 16px 0;
    width: 80px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 200px;
  margin: 40px auto;
`;

const Benefits = () => (
  <Wrapper id="benefits" color="#ecf5f5">
    <Container>
      <Header3>De Voordelen</Header3>
      <Row>
        <Col md={4}>
          <Benefit>
            <Paragraph>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Paragraph>
          </Benefit>
        </Col>
        <Col md={4}>
          <Benefit>
            <Paragraph>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Paragraph>
          </Benefit>
        </Col>
        <Col md={4}>
          <Benefit>
            <Paragraph>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Paragraph>
          </Benefit>
        </Col>
      </Row>
    </Container>
    <ButtonContainer>
      <Button title="Afspraak maken adviseur" />
    </ButtonContainer>
  </Wrapper>
);
export default Benefits;
