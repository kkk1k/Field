import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SnsContanier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 5%;
`;

const InfoContanier = styled.div`
  display: flex;
  flex-direction: column;
  a{
    color: while;
  }
  h4{
    font-size: 1rem;
    margin: 1rem 1.5rem;
  }
  p {
    color: white;
    font-size: 0.75rem;
    line-height: 1.3;
    margin:1rem 1.5rem;
  }
  ,
`;

const TitleContanier = styled.div`
  display: flex;
  margin: 2rem;
  align-items: center;
  h3 {
    font-size: 1.25rem;
    padding: 0 1rem 0 0.5rem;
  }
`;

const LinkContanier = styled.div`
  font-size: 0.6rem;
  display: flex;
  margin: 1rem 0 2rem 0;
  border: 2px solid white;
  border-radius: 1rem;
  background: ${props => props.background};
  a {
    padding: 0.5rem 0.2rem 0.5rem 0.5rem;
    font-size: 1rem;
    color: white;
    text-decoration: none;
  }
  p {
    display: flex;
  }
  img {
    margin: 0.2rem 0.4rem 0.2rem 0;
  }
`;

function SnsInfo({info, children}) {
  const {name, imageAlt, image, linkTitle, link, title, summary, description, color} = info;

  return (
    <SnsContanier>
      <TitleContanier>
        <img src={image} alt={imageAlt} width={35} height={30} />
        <h3>{name}</h3>
      </TitleContanier>
      {children}
      <LinkContanier background={color}>
        <p>
          <a href={link}>{linkTitle} 바로가기</a>
          <img src='Arrow.png' alt={imageAlt} width={20} height={25} />
        </p>
      </LinkContanier>
      <InfoContanier>
        <h4>{title}</h4>
        <p>{summary}</p>
        <p>{description}</p>
      </InfoContanier>
    </SnsContanier>
  );
}

SnsInfo.propTypes = {
  children: PropTypes.node,
  info: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    linkTitle: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
  }),
};

SnsInfo.defaultProps = {
  children: null,
  info: {
    name: "",
    image: "",
    imageAlt: "",
    linkTitle: "",
    link: "",
    title: "",
    summary: "",
    description: "",
  },
};

export default SnsInfo;
