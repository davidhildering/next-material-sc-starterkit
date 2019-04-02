import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { Header3, Header4, Paragraph } from "../Typography";
import { CopyContainer } from "../../containers/Home";

export const ProductExplanation = () => {
  return (
    <Container id="hoewerkthet">
      <Row>
        <Col xs={12} md={12}>
          <CopyContainer>
            <Header3>Hoe werkt het?</Header3>
            <Header4>Subtitle</Header4>
            <Container>
              <Row>
                <Col xs={12} md={6}>
                  <Paragraph>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </Paragraph>
                </Col>
                <Col xs={12} md={6}>
                  <Paragraph>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
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
