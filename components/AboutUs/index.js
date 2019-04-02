import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { Header3, Paragraph } from "../Typography";
import { CopyContainer } from "../../containers/Home";
import styled from "styled-components";

const ColorBox = styled.div`
  background: #dfeeef;
  border-radius: 16px;
  padding: 24px;
`;

export const AboutUs = () => {
  return (
    <Container id="aboutus">
      <Row>
        <Col xs={12} md={12}>
          <CopyContainer>
            <ColorBox>
              <Header3>Wie zijn wij?</Header3>
              <Container>
                <Row>
                  <Col xs={12} md={6}>
                    <Paragraph>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </Paragraph>
                    <Paragraph>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </Paragraph>
                  </Col>
                  <Col xs={12} md={6}>
                    <Paragraph>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </Paragraph>
                    <Paragraph>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </Paragraph>
                  </Col>
                </Row>
              </Container>
            </ColorBox>
          </CopyContainer>
        </Col>
      </Row>
    </Container>
  );
};
