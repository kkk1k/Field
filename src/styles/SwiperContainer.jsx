import styled from "styled-components";

const SwiperContainer = styled.div`
  width: ${props => (props.width ? props.width : "80%")};
  margin-left: ${props => (props.ml ? props.ml : "10%")};
  margin-right: ${props => (props.mr ? props.mr : "10%")};
  margin-bottom: 2rem;
`;

export default SwiperContainer;
