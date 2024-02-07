import styled from "styled-components";

const NanumFont = styled.h3`
  font-family: "Nanum Myeongjo", serif;
  font-size: ${props => (props.size ? props.size : "2rem")};
  margin-top: ${props => (props.mt ? props.mt : "")};
  margin-bottom: ${props => (props.mb ? props.mb : "")};
  margin-left: ${props => (props.ml ? props.ml : "")};
  margin-right: ${props => (props.mr ? props.mr : "")};
  line-height: 1.3;
  text-align: center;
`;

export default NanumFont;
