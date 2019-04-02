import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { Header3, Paragraph } from "../Typography";
import { CopyContainer } from "../../containers/Home";

export const FAQ = () => {
  return (
    <Container id="faq">
      <Row>
        <Col xs={12} md={12}>
          <CopyContainer>
            <Header3>Veelgestelde vragen</Header3>
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
          </CopyContainer>
        </Col>
      </Row>
    </Container>
  );
};
