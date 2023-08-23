import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList/>
        
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="obiri_dev.jpg" alt="" />
    </div>
  )
  
}

function Intro() {
  return (
    <div className="data">
      Meet Philip Obiri, a fullstack software developer with adept experience buiding aesthetic frontend with React, secure and efficenit backends with Django and beautiful mobile apps with Flutter.
   </div>
  )
  
}


function SkillList() {
  return (
    <ul className="skill-list">
      <li><Skill name="HTML 5 + CSS 3" emoji="💪🏼" color="pink" /></li>
      <li><Skill name="JavaScript" emoji="💪🏼" color="grey"  /></li>
      <li><Skill name="React" emoji="💪🏼" color="yellowgreen" /></li>
      <li><Skill name="Python" emoji="💪🏼" color="purple"  /></li>
      <li><Skill name="Django" emoji="💪🏼" color="green" /></li>
      <li><Skill name="Flutter" emoji="💪🏼" color="powderblue"  /></li>
      <li><Skill name="Git and GitHub" emoji="💪🏼" color="darkgrey"  /></li>
    </ul>
  );
}

function Skill(props) {
  return (
    <span className="skill" style={{ background : props.color }}>
      {props.name} {props.emoji}
    </span>
  )
}


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);



