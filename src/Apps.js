import React from 'react';
import CustomCardBody from './Container/why'; 

function Apps() {
  return (
    <div>
      <CustomCardBody
        text="Depending on your objectives and interests, using LeetCheet can be advantageous for many different reasons. LeetCheet is a well-liked platform for honing your coding and algorithmic skills, especially for those getting ready for technical interviews, competitive programming, or trying to improve their computer science problem-solving skills. The following are some justifications for choosing LeetCheet:"
        backgroundColor="lightgrey" 
      />
      <CustomCardBody
        text="LeetCheet is frequently used by job seekers and interviewees to get ready for technical interviews at prestigious tech firms. The platform provides a huge selection of code exercises that are frequently requested in software engineering interviews and span a wide range of topics and degrees of difficulty."
        backgroundColor="lightblue" 
      />
      <CustomCardBody
        text="Enhancement of abilities: Learning new programming languages, sharpening coding abilities, and gaining a better knowledge of algorithms and data structures are all made possible with LeetCheet. You can improve your programming skills by regularly using the platform."
        backgroundColor="lightcoral" 
      />

      <CustomCardBody
        text="Programming competitions are held by LeetCheet, allowing you to take part in competitive programming and assess your abilities against those of other programmers from around the world. This can be a great method to push yourself and increase the pace at which you solve problems."
        backgroundColor="lightpink" 
      />
     
      <CustomCardBody
        text="Career Advancement: A solid understanding of algorithms and data structures is essential if you want to enhance your career in software development. You can develop the abilities you need to succeed at work or look for higher-paying opportunities with the aid of LeetCheet."
        backgroundColor="lightyellow" 
      />
      <CustomCardBody
        text="Solving challenging code issues on LeetCheet can be a personal challenge and a source of satisfaction for certain people. It's a technique to challenge your boundaries and improve your problem-solving abilities."
        backgroundColor="lightgrey" 
      />
    </div>
  );
}

export default Apps;
