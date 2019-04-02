import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Slider from "@material-ui/lab/Slider";
import { withStyles } from "@material-ui/core/styles";
import { Header1, Header2 } from "../Typography";
import { Container, Row } from "react-grid-system";

const BannerContainer = styled.div`
  padding: 0;
  background: #ffffff;
`;

const Banner = styled.div`
  position: relative;
  background: #a8dadc;
  margin: 0 auto;
  left: 0;
  right: 0;
  height: 832px;
  overflow: hidden;
  max-width: 100%;
  img {
    max-width: 100%;
    position: absolute;
    height: auto;
    bottom: -60px;
  }

  @media only screen and (min-width: 1300px) {
    img {
      bottom: -100px;
    }
  }
  @media only screen and (min-width: 550px) and (max-width: 768px) {
    img {
      bottom: -25px;
    }
  }
`;

const BannerInfoBlock = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 48px;
  top: 144px;
  overflow: hidden;
  max-width: 480px;
  height: 400px;
  @media (min-width: 768px) and (max-width: 1200px) {
    left: 0;
  }
  @media only screen and (max-width: 768px) {
    position: relative;
    left: 8px;
    top: 80px;
  }
`;

const BannerWidget = styled.div`
  border: 1px solid white;
  border-radius: 8px;
  width: 400px;
  background: white;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  right: 80px;
  top: 150px;
  overflow: hidden;
  max-width: 480px;
  height: 488px;
  @media (min-width: 768px) and (max-width: 1200px) {
    right: -25px;
  }
  @media only screen and (max-width: 330px) {
    max-width: 280px;
  }
  @media only screen and (max-width: 768px) {
    position: relative;
    left: 0;
    top: -100px;
    max-width: 344px;
  }
`;

const BannerInfoBlockTitle = styled(Header1)`
  color: black;
`;

const BannerInfoBlockSubTitle = styled(Header2)`
  color: black;
  max-width: 350px;
`;

const SliderContainer = styled.div`
  display: inline-block;
  margin: 45px 10px 0 10px;
  height: 50px;
  width: 60%;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 200px;
  position: absolute;
  bottom: 25px;
  left: 25%;
`;

const styles = () => ({
  thumb: {
    backgroundColor: "#FFFFFF",
    border: "1px solid",
    width: "20px",
    height: "20px",
  }
});

const OutCome = styled.div`
  text-align: right;
  padding-right: 62px;
  padding-top: 10px;
  font-weight: 600;
  font-size: 18px;
`;

class TopBanner extends React.PureComponent {
  state = {
    housePrice: 300000,
    mortgage: 200000,
    rentPrice: 1500
  };

  handleChange = name => (e, value) => {
    this.setState({ [name]: value });
  };


  render() {
    const { classes } = this.props;
    const { housePrice, mortgage, rentPrice } = this.state;

    return (
      <BannerContainer>
        <Banner>
          <img src="https://via.placeholder.com/2800x2000/a8dadc" />
          <Container>
            <Row>
              <BannerInfoBlock>
                <BannerInfoBlockTitle>Lorum Ipsumk</BannerInfoBlockTitle>
                <BannerInfoBlockSubTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </BannerInfoBlockSubTitle>
              </BannerInfoBlock>
              <BannerWidget>
                <SliderContainer>
                  <p>Lorum 1</p>
                  <Slider
                    classes={{ thumb: classes.thumb }}
                    value={housePrice}
                    min={150000}
                    max={400000}
                    step={20000}
                    onChange={this.handleChange("housePrice")}
                  />
                </SliderContainer>
                <span>{this.state.housePrice}</span>
                <SliderContainer>
                  <p>Lorum 2</p>
                  <Slider
                    classes={{ thumb: classes.thumb }}
                    value={mortgage}
                    min={100000}
                    max={350000}
                    step={20000}
                    onChange={this.handleChange("mortgage")}
                  />
                </SliderContainer>
                <span>{this.state.mortgage}</span>
                <SliderContainer>
                  <p>Lorum 3</p>
                  <Slider
                    classes={{thumb: classes.thumb}}
                    value={rentPrice}
                    min={500}
                    max={2500}
                    step={200}
                    onChange={this.handleChange("rentPrice")}
                  />
                </SliderContainer>
                <span>{this.state.rentPrice}</span>
                <OutCome>
                  <p>rendement: 2,5 % = 2500 p.j</p>
                </OutCome>
                <ButtonContainer>
                  <Button title="CTA make appointment" />
                </ButtonContainer>
              </BannerWidget>
            </Row>
          </Container>
        </Banner>
      </BannerContainer>
    );
  }
}

export default withStyles(styles)(TopBanner);
