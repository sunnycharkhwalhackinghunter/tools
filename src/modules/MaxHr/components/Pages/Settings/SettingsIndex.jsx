import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
export const SettingsIndex = () => {
  const SettingsIndexApp = (props) => {
    return (
      <>
        <div className="col-12">
          <div className="Reports_card_main_div">
            <h3>{props.toptile}</h3>
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              {props.arr.cat1.map((val, i) => {
                return (
                  <div
                    key={i}
                    className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                  >
                    <NavLink to={val.link}>
                      <div className="Reports_card_inner_div">
                        <h4>
                          {val.inertitle}
                          <span>
                            <BsArrowRight />
                          </span>
                        </h4>
                        <p>{val.text}</p>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };
  const SettingsIndexData = [
    {
      toptile: "Company Setup",
      cat1: [
        {
          link: "/hr/company_setup",
          inertitle: "Company Setup",
          text: "Add your company details here",
        },
      ],
    },
  ];
  return (
    <>
      <TopPageTitle Name="Settings" />
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        {SettingsIndexData.map((val, i) => {
          return <SettingsIndexApp key={i} toptile={val.toptile} arr={val} />;
        })}
      </div>
    </>
  );
};
