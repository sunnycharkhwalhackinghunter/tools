import { FullBtn } from "../../../../common/ManagerComponents/Btn/Btn";
import { WelcomeNote } from "../../../../common/ManagerComponents/WelcomeNote/WelcomeNote";
import Img from "../../../../common/components/img/Img";
import Icon from "../../../../../pics/Manager/d1.png";
import Icon2 from "../../../../../pics/Manager/d2.png";
import Icon3 from "../../../../../pics/Manager/d3.png";
import Icon4 from "../../../../../pics/Manager/d4.png";
import Icon5 from "../../../../../pics/Manager/d5.png";
import Icon6 from "../../../../../pics/Manager/d6.png";
import { NavLink } from "react-router-dom";
export const Index = () => {
  return (
    <>
      <WelcomeNote
        name="Shived"
        text="Lets do the best today"
        data={<FullBtn link="/" name="Add Project" />}
      />
      <ProjectSummary />
    </>
  );
};
const ProjectSummary = () => {
  const App = (props) => {
    return (
      <>
        <NavLink to={props.link}>
          <div
            className="project_summary_card"
            style={{ backgroundColor: props.backgroundColor }}
          >
            <div className="row">
              <div className="col-12">
                <Img
                  backgroundImage={props.icon}
                  className="project_summary_card_icon"
                />
                <div>
                  <p style={{ color: props.color }}>
                    <span>{props.number}</span>
                    {props.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </>
    );
  };
  const Data = [
    {
      link: "/",
      backgroundColor: "#0043CE",
      icon: Icon,
      color: "white",
      number: "12",
      text: "Project from BD Team",
    },
    {
      link: "/",
      backgroundColor: "#8D8D8D",
      icon: Icon2,
      color: "white",
      number: "12",
      text: "Project from Website",
    },
    {
      link: "/",
      backgroundColor: "#0A0E30",
      icon: Icon3,
      color: "white",
      number: "12",
      text: "In Progress Project",
    },
    {
      link: "/",
      backgroundColor: "#F1C21B",
      icon: Icon4,
      color: "white",
      number: "12",
      text: "Projects in Pipeline",
    },
    {
      link: "/",
      backgroundColor: "#393939",
      icon: Icon4,
      color: "white",
      number: "12",
      text: "Tasks in Pipeline",
    },
    {
      link: "/",
      backgroundColor: "#DA1E28",
      icon: Icon5,
      color: "white",
      number: "12",
      text: "On Hold",
    },
    {
      link: "/",
      backgroundColor: "#24A148",
      icon: Icon6,
      color: "white",
      number: "12",
      text: "Completed Project",
    },
  ];
  return (
    <>
      <div>
        <div className="project_summary_title">
          <h3>project Summary</h3>
        </div>
        <div className="project_summary_card_top_div">
          {Data.map((val, i) => {
            return (
              <App
                key={i}
                link={val.link}
                backgroundColor={val.backgroundColor}
                icon={val.icon}
                color={val.color}
                number={val.number}
                text={val.text}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
