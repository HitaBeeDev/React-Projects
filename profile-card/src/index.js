import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { findRenderedComponentWithType } from "react-dom/test-utils";

const skills = [
  { skill: "#HTML, CSS", color: "#00f5d4" },
  { skill: "#JavaScript", color: "#c196f6" },
  { skill: "#Web Design", color: "#00bbf9" },
  { skill: "#Git and Github", color: "#f15bb5" },
  { skill: "#React", color: "#fee440" },
];

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className="container">
      <ProfileImage />
      <ProfileDetails />
    </div>
  );
}

function ProfileImage() {
  return <img src="profile-image.jpg" alt="profile" className="image"></img>;
}

function ProfileDetails() {
  return (
    <div className="profile__details">
      <h1 className="profile__name">Johnathan Porter</h1>
      <p className="profile__description">
        Senior frontend programmer skilled in HTML, CSS, JavaScript, React, and
        Angular. Expertise in responsive design, UI/UX principles, and
        performance optimization. Proficient in Git, Jira, and Trello for
        collaborative project management. Strong understanding of RESTful APIs
        and cross-browser compatibility. Passionate about staying updated with
        emerging technologies.
      </p>
      <div className="skills__list">
        {/* {listOfskills.map(skills) => (<Skills skillsObj={skills} key={skill.skillName} />)} */}

        {skills.map((skill) => (
          <Skills skill={skill.skill} color={skill.color} />
        ))}
      </div>
    </div>
  );
}

function Skills({ skill, color }) {
  return (
    <div style={{ backgroundColor: color }}>
      <h2 className="skills">{skill}</h2>
    </div>
  );
}
