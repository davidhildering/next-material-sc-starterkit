import React from "react";
import TopBanner from "../../components/TopBanner";
import MortgageCalculator from "../../components/MortgageCalculator";
import Contact from "../../components/Contact";
import { ProductExplanation } from "../../components/ProductExplanation";
import { FAQ } from "../../components/FAQ";
import { AboutUs } from "../../components/AboutUs";
import Benefits from "../../components/Benefits";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "styled-components";

export const CopyContainer = styled.div`
  padding-bottom: 24px;
  padding-top: 24px;
  min-height: 400px;
`;

class Home extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <TopBanner />
        <Benefits />
        <ProductExplanation />
        <MortgageCalculator />
        <Contact />
        <FAQ />
        <AboutUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
