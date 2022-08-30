import { NavLink } from "react-router-dom";
export const FullBtn = (props) => {
  return (
    <>
      <NavLink className="manager_btn_full" to={props.link}>
        {props.name}
      </NavLink>
    </>
  );
};
