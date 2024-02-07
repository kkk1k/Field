import React, {useState} from "react";
import ContactForm from "../components/Contact/ContactForm";
import ContactContent from "../components/Contact/ContactContent";

export default function Contact() {
  const [isAgree, setIsAgree] = useState(false);

  const formHandler = agree => {
    setIsAgree(agree);
  };

  return (
    <>
      <ContactContent onAgree={formHandler} />
      <ContactForm agree={isAgree} />
    </>
  );
}
