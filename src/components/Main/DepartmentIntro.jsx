import React, {useState} from "react";
import styled from "styled-components";
import Card from "./Card";

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  width: 8.75rem;
  height: 3.125rem;
  border-radius: 30px;
  border: none;
  font-size: 1.25rem;

  ${props =>
    props.isActive &&
    `
    background-color: gray;
    color: #fff;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
  margin-top: 1.875rem;
`;

const CardContainer = styled.div`
  display: ${props => (props.visible ? "block" : "none")};
  width: 80%;
  background-color: white;
  margin-right: 10%;
  margin-left: 10%;
  border-radius: 10px;
  border: 1px solid white;
`;

function DepartmentIntro() {
  const [selectCategory, setSelectCategory] = useState("기획부");
  const category = ["기획부", "대외협력부", "컴페티션부", "홍보부"];

  const handleButtonClick = item => {
    setSelectCategory(item);
  };

  const [selectedCard, setSelectedCard] = useState("기획부");
  const showCard = name => {
    setSelectedCard(name);
  };

  const handleCardClick = item => {
    handleButtonClick(item);
    showCard(item);
  };

  return (
    <Container>
      {category.map(item => (
        <Button key={item} isActive={selectCategory === item} onClick={() => handleCardClick(item)}>
          {item}
        </Button>
      ))}
      <CardContainer visible={selectedCard === "기획부"}>
        <Card name='기획부' intro='기획부 소개' description='기획부 설명' />
      </CardContainer>
      <CardContainer visible={selectedCard === "대외협력부"}>
        <Card name='대외협력부' intro='대외협력부 소개' description='대외협력부 설명' />
      </CardContainer>
      <CardContainer visible={selectedCard === "컴페티션부"}>
        <Card name='컴페티션부' intro='컴페티션부 소개' description='컴페티션부 설명' />
      </CardContainer>
      <CardContainer visible={selectedCard === "홍보부"}>
        <Card name='홍보부' intro='홍보부 소개' description='홍보부 설명' />
      </CardContainer>
    </Container>
  );
}

export default DepartmentIntro;
