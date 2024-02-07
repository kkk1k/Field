import styled from "styled-components";

const BackgroundImage = styled.section`
  display: ${props => (props.display ? props.display : "flex")};
  height: ${props => (props.height ? props.height : "")};
  width: ${props => (props.width ? props.width : "")};
  position: ${props => (props.position ? props.position : "")};
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${props => props.src});
  background-position: center;
  padding-top: ${props => (props.pt ? props.pt : "")};
  padding-bottom: ${props => (props.pb ? props.pb : "")};
  padding-left: ${props => (props.pl ? props.pl : "")};
  padding-right: ${props => (props.pr ? props.pr : "")};
  background-size: ${props => (props.size ? props.size : "cover")};
  background-repeat: no-repeat;
  background-size: cover;
  opacity: ${props => (props.opacity ? props.opacity : "")};
  color: ${props => (props.color ? props.color : "white")};
  justify-content: center;
  align-items: center;
`;

export default BackgroundImage;
