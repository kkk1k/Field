import React, {useState} from "react";
import styled from "styled-components";

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

function Category() {
  const [selectCategory, setSelectCategory] = useState("기획부");
  const category = ["기획부", "대외협력부", "컴페티션부", "홍보부"];

  const handleButtonClick = item => {
    setSelectCategory(item);
  };

  return (
    <Container>
      {category.map(item => (
        <Button
          key={item}
          isActive={selectCategory === item}
          onClick={() => handleButtonClick(item)}
        >
          {item}
        </Button>
      ))}
    </Container>
  );
}

export default Category;
