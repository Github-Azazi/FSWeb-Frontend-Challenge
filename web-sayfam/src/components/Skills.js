import { useContext } from "react";
import { CiteContext } from "./contexts/CiteContext";
function Skills() {
  const { store } = useContext(CiteContext);
  return (
    <div className="skills-container">
      <h1 className="skill-title">{store.baslik.skills}</h1>
      <div className="skill-explanation-area">
        <div>
          <h3>Java Script</h3>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
        <div>
          <h3>React.Js</h3>
          <p>
            {" "}
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h3>Node.js</h3>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Skills;