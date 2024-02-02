import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "")};
  align-items: center;
  justify-content: space-between;
  margin-top: ${props => (props.mt ? props.mt : "")};
  margin-bottom: ${props => (props.mb ? props.mb : "")};
  margin-left: ${props => (props.ml ? props.ml : "")};
  margin-right: ${props => (props.mr ? props.mr : "")};
  gap: ${props => (props.gap ? props.gap : "")};
`;

export default FlexBox;
