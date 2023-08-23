import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


const skills = [
  {
    name: "HTML + CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    name: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    name: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    name: "Django",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    name: "Flutter",
    level: "advanced",
    color: "#2C626A"
  },
  {
    name: "Git And GitHub",
    level: "intermediate",
    color: "#2C62EA"
  }
]


function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />

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

      {
        skills.map(skill =>
          <li> <Skill name={skill.name} color={skill.color} level={skill.level} /></li>
        )
      }

    </ul>
  );
}

function Skill({ name, color, level }) {
  return (
    <span className="skill" style={{ background: color }}>
      {name} {level === "advanced" && "💪🏼"}{level === "intermediate" && "👍🏼"} {level === "begginer" && "👶🏼"}
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



