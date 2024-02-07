import styled from "styled-components";

const SwiperContainer = styled.div`
  width: ${props => (props.width ? props.width : "100%")};
  margin-top: ${props => (props.mt ? props.mt : "")};
  margin-left: ${props => (props.ml ? props.ml : "")};
  margin-right: ${props => (props.mr ? props.mr : "")};
  margin-bottom: 2rem;
`;

export default SwiperContainer;
