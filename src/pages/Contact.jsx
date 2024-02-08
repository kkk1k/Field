import React, {useState} from "react";
import styled from "styled-components";

import ContactForm from "../components/Contact/ContactForm";
import ContactContent from "../components/Contact/ContactContent";
import ContactAgree from "../components/Contact/ContactAgree";
import H2 from "../styles/H2";

const MainContent = styled.main`
  margin: 0 10%;
`;

export default function Contact() {
  const [isAgree, setIsAgree] = useState(false);

  const formHandler = agree => {
    setIsAgree(agree);
  };

  return (
    <MainContent>
      <H2>CONTACT</H2>
      <ContactContent />
      <ContactAgree onAgree={formHandler} />
      <ContactForm agree={isAgree} />
    </MainContent>
  );
}
