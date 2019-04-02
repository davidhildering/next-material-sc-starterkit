import React from "react";
import styled from "styled-components";
import { HamburgerSpin } from "react-animated-burgers";
import Scrollchor from "react-scrollchor";

const NavBarContainer = styled.div`
  background: #ecf5f5;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -ms-flex-pack: end;
  z-index: 999;
  position: fixed;
  max-width: 1260px;
  border-bottom: 1px solid;
  @media only screen and (max-width: 1060px) {
    background: white;
    transition: background 150ms ease-in-out;
    flex-direction: column;
    width: 100%;
    border-bottom: ${props => (props.isActive ? "1px solid grey" : "none")};
  }
`;

const HamburgerMenu = styled(HamburgerSpin)`
  display: none;
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 1060px) {
    align-self: flex-end;
    display: initial;
    cursor: pointer;
  }
`;

const NavBarItems = styled.nav`
  display: flex;
  font-size: 18px;
  font-family: SFProBold, sans-serif;
  @media only screen and (max-width: 1060px) {
    flex-direction: column;
    display: ${props => (props.isActive ? "flex" : "none")};
    padding-left: 8px;
  }
`;

const LinkTitle = styled.div`
  padding: 16px 24px;
  color: black;
  z-index: 99999;
  a {
    color: black;
    text-decoration: none;
  }
`;

const LogoContainer = styled.div`
  flex: auto;
  img {
    display: none;
    width: 320px;
    height: 196px;
    top: -56px;
    left: 8px;
    position: absolute;
    @media only screen and (max-width: 1200px) {
      left: -32px;
    }
    @media only screen and (min-width: 1600px) {
      left: 152px;
    }
  }
`;

class NavBar extends React.PureComponent {
  state = {
    isActive: false
  };

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBarContainer isActive={this.state.isActive}>
          <HamburgerMenu
            isActive={this.state.isActive}
            toggleButton={this.toggleButton}
          />
          <LogoContainer>
            <p>logo</p>
          </LogoContainer>
          <NavBarItems isActive={this.state.isActive}>
            <LinkTitle>
              <Scrollchor
                to="#benefits"
                afterAnimate={() => this.toggleButton()}
              >
                De voordelen
              </Scrollchor>
            </LinkTitle>
            <LinkTitle>
              <Scrollchor
                to="#hoewerkthet"
                afterAnimate={() => this.toggleButton()}
              >
                Hoe werkt het?
              </Scrollchor>
            </LinkTitle>
            <LinkTitle>
              <Scrollchor
                animate={{ offset: -100 }}
                to="#mortgage"
                afterAnimate={() => this.toggleButton()}
              >
                calculator
              </Scrollchor>
            </LinkTitle>
            <LinkTitle>
              <Scrollchor
                animate={{ offset: -100 }}
                to="#contact"
                afterAnimate={() => this.toggleButton()}
              >
                Contact
              </Scrollchor>
            </LinkTitle>
            <LinkTitle>
              <Scrollchor to="#faq" afterAnimate={() => this.toggleButton()}>
                Veelgestelde vragen
              </Scrollchor>
            </LinkTitle>
            <LinkTitle>
              <Scrollchor
                to="#aboutus"
                afterAnimate={() => this.toggleButton()}
              >
                Wie zijn wij
              </Scrollchor>
            </LinkTitle>
          </NavBarItems>
        </NavBarContainer>
      </React.Fragment>
    );
  }
}

export default NavBar;
