import React, { useState, useEffect, Fragment } from "react";
import config from "../../config";
import integrate from "../../integrate";
import oculusrift from "./oculus-rift.jpg";

import "./ReadingPage.scss";

export default function ReadingPage() {
  const [article, setArticle] = useState({
    date: "",
    author: "",
    title: ``,
    content: ``
  });

  useEffect(() => {
    setArticle({
      ...article,
      date: "2 Oct • Research",
      author: "Suraj Iyyengar",
      content: [
        {
          sub: "From the very first Head Mounted Display System (the famed Sword of Damocles) created at MIT’s Lincoln Lab which was so heavy it had to be attached to a mechanical arm suspended from the ceiling of the lab to modern-day Oculus Rift VR headsets which feel like a pair of glasses, VR headsets have come a long way in becoming smaller, portable, more immersive and more and more user-friendly. What’s the next step ahead?",
          text: "The next step is definitely to shift focus on improving the reality aspect rather than the virtual one. Currently, VR technique is limited to users’ visual and auditory senses. Therefore, sense of temperature, smell, fatigue and other biological aspects are to be addressed in this domain to make it more immersive. Moreover, classification of input and output information as required in different applications and enhancement of connectivity and interchangeability of input information provided by different information and communication technology tools are very essential to reduce the latency in the VR technology."
        },
        {
          sub: "VR nowadays is no longer restricted to the gaming industry, its applications are as varied as healthcare, retail, entertainment, automotive, education and much more. The VR lab at IIT Kharagpur, for instance, does a lot of work on accident scenario development, virtual prototyping, testing and control of industrial operations etc. Can you elaborate a bit on that?",
          text: "The Virtual Reality (VR) Laboratory is dedicated to the purpose of accident modelling, simulation and analysis for improved hazard identification, safety training & education, safety inspection and instruction, and will ultimately help in a big way hazardous industries like iron & steel, oil & gas, coal and power, etc. in implementing the concept of ‘prevention through design (PtD)’. Since accidents cannot be created on the shop floor, experiments need to be conducted virtually. At the VR Laboratory, accident scenarios are generated and modelled on the computer, and all hazards and accident paths are identified. Users experience various hazardous scenarios as seen on a realistic plane through the use of sensors. The laboratory also deals with other subjects, such as work system design, ergonomics, and product development. VR lab at IIT Kharagpur has already started providing consultancy to industries such as integrated steel industry on VR based hazard identification, training and PtD for their ongoing operations and upcoming expansions."
        }
      ],
      /* content1: `Q: From the very first Head Mounted Display System (the famed Sword of Damocles) created at MIT’s Lincoln Lab which was so heavy it had to be attached to a mechanical arm suspended from the ceiling of the lab to modern-day Oculus Rift VR headsets which feel like a pair of glasses, VR headsets have come a long way in becoming smaller, portable, more immersive and more and more user-friendly. What’s the next step ahead?\n

    Ans: The next step is definitely to shift focus on improving the reality aspect rather than the virtual one. Currently, VR technique is limited to users’ visual and auditory senses. Therefore, sense of temperature, smell, fatigue and other biological aspects are to be addressed in this domain to make it more immersive. Moreover, classification of input and output information as required in different applications and enhancement of connectivity and interchangeability of input information provided by different information and communication technology tools are very essential to reduce the latency in the VR technology.\n\n

    Q: VR nowadays is no longer restricted to the gaming industry, its applications are as varied as healthcare, retail, entertainment, automotive, education and much more. The VR lab at IIT Kharagpur, for instance, does a lot of work on accident scenario development, virtual prototyping, testing and control of industrial operations etc. Can you elaborate a bit on that?\n

    Ans: The Virtual Reality (VR) Laboratory is dedicated to the purpose of accident modelling, simulation and analysis for improved hazard identification, safety training & education, safety inspection and instruction, and will ultimately help in a big way hazardous industries like iron & steel, oil & gas, coal and power, etc. in implementing the concept of ‘prevention through design (PtD)’. Since accidents cannot be created on the shop floor, experiments need to be conducted virtually. At the VR Laboratory, accident scenarios are generated and modelled on the computer, and all hazards and accident paths are identified. Users experience various hazardous scenarios as seen on a realistic plane through the use of sensors. The laboratory also deals with other subjects, such as work system design, ergonomics, and product development. VR lab at IIT Kharagpur has already started providing consultancy to industries such as integrated steel industry on VR based hazard identification, training and PtD for their ongoing operations and upcoming expansions.\n

    `, */
      title: `What’s next? VR scientists talk!`
    });
  }, []);

  return (
    <div className="reading-page center">
      <h3 className="article-date">{article.date}</h3>
      <h1 className="article-title">{article.title}</h1>
      <h3 className="article-author">{article.author}</h3>
      <img src={oculusrift} alt="vr" className="image"/>
      {article.content && article.content.map(item => {
        return (
          <div>
            <div className="sub">{item.sub}</div>
            <div className="text">{item.text}</div>
          </div>
        )
      })}
    </div>
  );
}
