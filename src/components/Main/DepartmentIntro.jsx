import React, {useState} from "react";
import styled from "styled-components";
import theme from "../../theme";
import Card from "./Card";

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 0.625rem;
  margin: 0.3125rem;
  cursor: pointer;
  width: 8.75rem;
  height: 3.125rem;
  border-radius: 1.875rem;
  border: none;
  font-size: 1.25rem;

  ${props =>
    props.isActive &&
    `
    background-color: ${theme.colors.blue};
    color: #fff;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 1.875rem;
`;

const CardContainer = styled.div`
  display: ${props => (props.visible ? "block" : "none")};
  width: 100%;
  background-color: black;
  border-radius: 1.875rem;
  border: 1px solid white;
  margin-top: 1.875rem;
`;

function DepartmentIntro() {
  const [selectCategory, setSelectCategory] = useState("기획부");
  const category = ["기획부", "대외협력부", "컴페티션부", "홍보부"];

  const planningHashTag = ["#FIELD열정맨", "#FIELD에너지", "#즐거움이공존하는이곳"];
  const externalCooperationHashTag = ["#FIELD연결고리", "#FIELD의심장", "#소통과화합이중시되는곳"];
  const competitionHashTag = ["#FIELD머리", "#FIELD브레인", "#지식과열정이융합되는곳"];
  const promotionHashTag = ["#FIELD알리미", "#FIELD소통창구", "#창의성과개성이표출되는곳"];

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
        <Card
          name='기획부'
          description='FIELD 인적, 학술적 교류를 활성화하기 위한 컨텐츠를 기획하고 진행, 총괄하는 부서'
          hashTag={planningHashTag}
          keyWord1='대인관계능력'
          keyWord2='리더십'
          keyWord3='창의력'
        />
      </CardContainer>
      <CardContainer visible={selectedCard === "대외협력부"}>
        <Card
          name='대외협력부'
          description='FIELD 내부와 외부의 교류를 담당하며 전반적인 활동에 필요한 인적, 물적 자원관리를 하는 부서 '
          hashTag={externalCooperationHashTag}
          keyWord1='말하기능력'
          keyWord2='소통능력'
          keyWord3='친화력'
        />
      </CardContainer>
      <CardContainer visible={selectedCard === "컴페티션부"}>
        <Card
          name='컴페티션부'
          description='FIELD 내 진행하는 학술교류에 관한 업무와 FIELD CAMP 컴페티션에 대한 자료와 평가 기준을 만드는 부서'
          hashTag={competitionHashTag}
          keyWord1='봉사심'
          keyWord2='열정'
          keyWord3='자기주장력'
        />
      </CardContainer>
      <CardContainer visible={selectedCard === "홍보부"}>
        <Card
          name='홍보부'
          description='FIELD와 산업공학을 알리는 전반적인 홍보물을 기획하고 제작하는 부서'
          hashTag={promotionHashTag}
          keyWord1='열정'
          keyWord2='창의성'
          keyWord3='팀워크'
        />
      </CardContainer>
    </Container>
  );
}

export default DepartmentIntro;
