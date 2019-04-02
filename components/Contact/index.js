import React from "react";
import { Container, Row, Col } from "react-grid-system";
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import { Wrapper } from "../Wrapper";
import { Header5, Header4 } from "../Typography";

export const Benefit = styled.div`
  width: 100%;
  margin: 24px 0;
  background: #ffffff;
  padding: 16px;
  text-align: center;
  height: 400px;
  border-radius: 16px;
  box-sizing: border-box;
  img {
    padding: 16px 0;
    width: 80px;
  }
`;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: '20px',
  },
  group: {
    margin: '20px',
  },
});



class Contact extends React.Component {

  state = {
    value: 'female',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Wrapper id="contact" color="#a8dadc">
        <Container>
          <Header4>Contact</Header4>
          <Header5>Vragen? Neem contact met ons op.</Header5>
          <Row>
            <Col md={6}>
              <Benefit>
                <form>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    style={{ flexDirection: "row" }}
                    aria-label="Gender"
                    name="gender1"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </RadioGroup>
                </FormControl>
                </form>
              </Benefit>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
