import React from "react";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";
import { Wrapper } from "../Wrapper";
import { Header5, Header4, Paragraph } from "../Typography";
import incomeQuote from "../../static/incomeQuote.json";
import TextField from "@material-ui/core/TextField";

const Benefit = styled.div`
  width: 100%;
    margin: 24px 0;
    background: #ffffff;
    padding: 40px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 400px;
    border-radius: 16px;
    box-sizing: border-box;
  img {
    padding: 16px 0;
    width: 80px;
  }
`;

class MortgageCalculator extends React.PureComponent {
  state = {
    income: "",
    maxMortgage: null
  };

  handleChange = event => {
    this.setState({
      income: event.target.value
    });
  };

  calculateMaxMortgage = () => {
    let income = Math.round((this.state.income / 1000) * 2) / 2;
    let quoteObject = {};
    let obj = incomeQuote.find(o => o.income === income);

    if (!obj && income > 110) {
      quoteObject = {
        income: income,
        quote: 0.25
      };
    } else if (!obj && income < 21) {
      quoteObject = {
        income: income,
        quote: 0.13
      };
    } else if (!obj) {
      income = income + 0.5;
      quoteObject = incomeQuote.find(o => o.income === income);
    } else {
      quoteObject = obj;
    }
    let maxMortgage = quoteObject.income * 1000 * quoteObject.quote * 15;
    this.setMaxMortgage(maxMortgage);
  };

  setMaxMortgage = maxMortgage => {
    this.setState({
      maxMortgage: maxMortgage
    });
  };

  render() {
    return (
      <Wrapper id="mortgage" color="#ecf5f5">
        <Container>
          <Header4>Lorum Calculator</Header4>
          <Header5>Calculate max mortgage</Header5>
          <Row>
            <Col md={6}>
              <Benefit>
                <TextField
                  id="standard-textarea"
                  label="Hoeveel is je inkomen?"
                  placeholder="70000"
                  margin="normal"
                  type="number"
                  value={this.state.income}
                  onChange={this.handleChange}
                />
                <button onClick={this.calculateMaxMortgage}>
                  calculate mortgage
                </button>
              </Benefit>

            </Col>
            <Col md={4}>
              <Benefit>
                <Paragraph>
                  outcome
                </Paragraph>
                <Paragraph>
                  <strong>{this.state.maxMortgage}</strong>
                </Paragraph>
              </Benefit>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default MortgageCalculator;
