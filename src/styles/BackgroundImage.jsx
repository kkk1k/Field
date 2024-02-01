import styled from "styled-components";

const BackgroundImage = styled.section`
  display: ${props => (props.display ? props.display : "flex")};
  height: ${props => (props.height ? props.height : "")};
  width: ${props => (props.width ? props.width : "")};
  position: ${props => (props.position ? props.position : "")};
  background-image: ${props => (props.src ? `url(${props.src})` : "")};
  background-position: center;
  object-fit: cover;
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
