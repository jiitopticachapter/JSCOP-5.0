import React, { useState } from "react";
import Heading from "../heading/Heading";
import "./faq.scss";
// import Header from "./Header";
import FAQ from "./faqtoggle";
// import { useEffect } from "react";

export default function Faq(props) {
  const [faqs, setFaqs] = useState([
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
      open: false
    }
  ]);
  
  // const[faqs,setFaqs] = useState({});
  // useEffect(()=>{
  //   setFaqs(props.Faqs);
  //   console.log(1);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[]);



  // console.log(Faqs);
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      <Heading title="FAQS" size="5rem"/>
      <div className="FAQS">
        {/* <Header /> */}
        
        <div className="faqs">
        {/* <h1 className='faq_heading'>FAQs</h1> */}
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </>
  );
}
