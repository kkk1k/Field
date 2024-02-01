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
    margin:1rem 1.5rem;
  }
  ,
`;

const TitleContanier = styled.div`
  display: flex;
  margin: 2rem;
  justify-content: center;
  h3 {
    font-size: 1.25rem;
    padding: 0 1rem 0 0.5rem;
  }
`;

const LinkContanier = styled.div`
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  margin: 0.25rem 0 2rem 0;
`;

function SnsInfo({info, children}) {
  const {name, imageAlt, image, linkTitle, link, title, summary, description} = info;

  return (
    <SnsContanier>
      <TitleContanier>
        <img src={image} alt={imageAlt} width={35} height={25} />
        <h3>{name}</h3>
      </TitleContanier>
      {children}
      <LinkContanier>
        <p>
          {`${linkTitle} :`}
          <a href={link}>{link}</a>
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
