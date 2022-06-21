import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { EmployeesProfileCard } from "../Profile/components/EmployeesProfileCard";
import { BsArrowLeft } from "react-icons/bs";
import { propTypes } from "react-bootstrap/esm/Image";
export const ApplyLeave = () => {
  const ApplyLeaveRightCard = (props) => {
    return (
      <>
        <div className="col-12">
          <div className="profile_iner_cont">
            <div className="ApplyLeave_right_card">
              <h3>{props.TopPageTitle}</h3>
              <p>
                {props.text}/<span>{props.textInner}</span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  const ApplyLeaveRightCardData = [
    {
      TopPageTitle: "Sick Leave",
      text: "08",
      textInner: "04",
    },
  ];
  return (
    <>
      <div className="custom_container">
        <TopPageTitle
          TilelIcon={<BsArrowLeft />}
          TitleLink={-1}
          Name="Apply Leave"
        />
        <EmployeesProfileCard />
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-8">
            <div className="profile_iner_cont">kfdmvk</div>
          </div>
          <div className="col-4">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              {ApplyLeaveRightCardData.map((val, i) => {
                return (
                  <ApplyLeaveRightCard
                    key={i}
                    TopPageTitle={val.TopPageTitle}
                    text={val.text}
                    textInner={val.textInner}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
