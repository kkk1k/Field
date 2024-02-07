import styled from "styled-components";

const FadeImage = styled.img`
  opacity: ${({isVisible}) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  width: ${props => (props.width ? props.width : "")};
  height: ${props => (props.height ? props.height : "")};
  object-fit: cover;
  margin-top: ${props => (props.mt ? props.mt : "")};
  margin-bottom: ${props => (props.mb ? props.mb : "")};
  margin-left: ${props => (props.ml ? props.ml : "")};
  margin-right: ${props => (props.mr ? props.mr : "")};
  border-radius: ${props => (props.radius ? props.radius : "")};
`;

export default FadeImage;
