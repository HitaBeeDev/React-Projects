import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { findRenderedComponentWithType } from "react-dom/test-utils";

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
      <div className="skills">
        <Skills name="#HTML+CSS" color="html" />
        <Skills name="#JavaScript" color="javascript" />
        <Skills name="#Web Design" color="web-design" />
        <Skills name="#Git and Github" color="git" />
        <Skills name="#React" color="react" />
      </div>
    </div>
  );
}

function Skills(props) {
  return <h2 className={props.color}>{props.name}</h2>;
}
