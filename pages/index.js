import React, { Component } from "react";
import styled from "styled-components";
import Home from "../containers/Home";
import Meta from '../components/meta'
import Router from 'next/router';
import { trackPageView } from '../helpers';
import CookieConsent from "react-cookie-consent";

const Layout = styled.div`
  font-family: SFProRegular, sans-serif;
  box-sizing: border-box;
  max-width: 1260px;
  margin: 0 auto;
`;

class App extends Component {

  componentDidMount() {
    Router.events.on('routeChangeComplete', this.handleRouteChange);
  }

 handleRouteChange = url => {
    trackPageView(url);
  };

  render() {
    return (
      <React.Fragment>
        <Meta />
      <Layout>
        <div>
          <Home />
        </div>
      </Layout>
        <CookieConsent
          debug //remove for production, set/leave for testing
          disableStyles={true}
          location="bottom"
          buttonText="Continue"
          style={{ display: 'flex', fontSize: '20px', padding: '32px 0', justifyContent: 'space-evenly', background: "#a8dadc", width: '100%', margin: "0 auto", fontFamily: 'sans-serif' }}
          buttonStyle={{ display: 'flex', padding: '7px 24px',  color: "#ffffff", fontSize: "16px", background: '#f55460', borderRadius: '4px', backgroundImage: 'none', border: '1px solid transparent' }}
          expires={5}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </React.Fragment>
    );
  }
}

export default App;
