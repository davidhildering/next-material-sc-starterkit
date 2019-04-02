import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${props => props.color};
  padding: 48px 48px 84px 48px;
  max-width: 1197px;
  margin: 0 auto;
  height: ${props => (props.height ? props.height : "100%")};
  min-height: ${props => (props.minHeight ? props.minHeight : "100%")};
  color: ${props => (props.fontColor ? props.fontColor : "#000000")};
`;
