import styled from "styled-components";

export const Header1 = styled.h1`
  font-family: SFProBold, sans-serif;
  font-size: 26px;
  line-height: 36px;
  color: ${props => (props.color ? props.color : "#32496a")};
  @media (min-width: 992px) {
    font-family: SFProBold, sans-serif;
    font-size: 44px;
    line-height: 60px;
  }
`;

export const Header2 = styled.h2`
  font-family: SFProRegular, sans-serif;
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
  color: ${props => (props.color ? props.color : "#32496a")};
  @media (min-width: 992px) {
    font-family: SFProBold, sans-serif;
    font-size: 28px;
    line-height: 32px;
  }
`;

export const Header3 = styled.h3`
  font-family: SFProBold, sans-serif;
  font-size: 26px;
  line-height: 40px;
  color: ${props => (props.color ? props.color : "#32496a")};
  @media (min-width: 768px) {
    font-family: SFProBold, sans-serif;
    font-size: 40px;
    line-height: 50px;
  }
`;

export const Header4 = styled.h4`
  font-family: SFProBold, sans-serif;
  font-size: 20px;
  margin: 0;
  color: ${props => (props.color ? props.color : "#32496a")};
  @media (min-width: 992px) {
    font-family: SFProBold, sans-serif;
    font-size: 24px;
  }
`;

export const Header5 = styled.h5`
  font-family: SFProRegular, sans-serif;
  font-size: 18px;
  margin: 0;
  color: ${props => (props.color ? props.color : "#32496a")};
  @media (min-width: 992px) {
    font-family: SFProBold, sans-serif;
    font-weight: 500;
    font-size: 22px;
  }
`;

export const Paragraph = styled.p`
  font-family: SFProMedium, sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: ${props => (props.color ? props.color : "#32496a")};
  @media (min-width: 992px) {
    font-size: 18px;
  }
`;

export const HeadTitle = styled(Header5)`
  opacity: ${props => (props.active ? "1" : "0.3")};
  max-width: 444px;
  margin: 50px 0 -50px 0;
  padding: 8px;
  border-bottom: 4px solid #f8e71c;
`;

export const InfoLink = styled.div`
  text-decoration: underline;
  cursor: pointer;
  width: 100px;
`;

export const FormTitle = styled.div`
  height: 21px;
  color: #5538b4;
  font-family: SFProMedium, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  margin-bottom: -8px;
  margin-top: 16px;
`;
