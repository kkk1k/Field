import styled from "styled-components";

const BackgroundImage = styled.section`
  display: flex;
  position: ${props => (props.position ? props.position : "")};
  background-image: ${props => (props.src ? `url(${props.src})` : "")};
  background-position: center;
  padding-top: ${props => (props.pt ? props.pt : "")};
  padding-bottom: ${props => (props.pb ? props.pb : "")};
  padding-left: ${props => (props.pl ? props.pl : "")};
  padding-right: ${props => (props.pr ? props.pr : "")};
  background-size: cover;
  opacity: ${props => (props.opacity ? props.opacity : "")};
  justify-content: center;
  align-items: center;
`;

export default BackgroundImage;
