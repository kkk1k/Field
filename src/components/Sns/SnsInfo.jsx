import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import H3 from "../../styles/H3";
import Image from "../../styles/Image";

const SnsContanier = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  &::before {
    content: "";
    width: 100%;
    height: 0.15rem;
    background-color: gray;
    border-radius: 0.1rem;
  }
`;

const TitleContanier = styled.div`
  display: flex;
  margin: 0 0 2rem 0;
  align-items: center;
`;

const LinkContanier = styled.div`
  font-size: 0.6rem;
  display: flex;
  margin: 2rem 0 2rem 0;
  border: 2px solid white;
  border-radius: 1rem;
  background: ${props => props.background};
`;

const Link = styled.a`
  font-size: 1rem;
  color: white;
  text-decoration: none;
  padding: 0.6rem 0.4rem;
`;

function SnsInfo({info, children}) {
  const {name, imageAlt, image, linkTitle, link, color} = info;

  return (
    <SnsContanier>
      <TitleContanier>
        <Image src={image} alt={imageAlt} width={35} height={30} />
        <H3 margin='1.5rem 0 1.5rem 0.5rem '>{name}</H3>
      </TitleContanier>
      {children}
      <LinkContanier background={color}>
        <Link href={link}>{linkTitle} 바로가기</Link>
        <Image
          src='Arrow.png'
          alt={imageAlt}
          width={20}
          height={25}
          mt='0.4rem'
          mb='0.4rem'
          mr='0.4rem'
        />
      </LinkContanier>
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
