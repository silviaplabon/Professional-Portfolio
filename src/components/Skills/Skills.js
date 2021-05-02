import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const frontEndTech = [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Javascript/ES6",
  "ReactJS",
];
const backEndTech = ["Express.js", "Node.js", "MongoDB"];
const deploymentTools = ["Git and Github", "Firebase", "Netlify", "Heroku"];
const others = ["C", "C++", "Data Structures", "Algorithms"];

const Skills = () => {
  return (
    <div className="skillsView mt-5 mb-5">
      <h1 className="text-center ">Skills</h1>
      <div className="row mt-4" style={{ lineHeight: "2.5" }}>
        <div className="col-md-3">
          <h5>Frontend Technology</h5>
          <ul style={{ margin: "0px", padding: "0px" }}>
            {frontEndTech.map((skill) => (
              <li style={{ listStyle: "none" }}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />{" "}
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Backend Technology</h5>
          <ul style={{ margin: "0px", padding: "0px" }}>
            {backEndTech.map((skill) => (
              <li style={{ listStyle: "none" }}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />{" "}
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Deployment Tools</h5>
          <ul style={{ margin: "0px", padding: "0px" }}>
            {deploymentTools.map((skill) => (
              <li style={{ listStyle: "none" }}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />{" "}
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Others</h5>
          <ul style={{ margin: "0px", padding: "0px" }}>
            {others.map((skill) => (
              <li style={{ listStyle: "none" }}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />{" "}
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;