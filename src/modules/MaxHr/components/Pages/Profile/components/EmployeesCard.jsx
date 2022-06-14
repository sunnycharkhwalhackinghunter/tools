import ProfilPhoto from "../../../../../../pics/profile.jpeg";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ProfileIcon from "../../../../../common/components/img/Img";
import ProfilPhoto2 from "../../../../../../pics/profile2.jpeg";
export const EmployeesCard = () => {
  const EmployeesCardApp = (props) => {
    const [EmployeesCard, setEmployeesCard] = useState(true);
    const EmployeesCardImg = () => {
      setEmployeesCard(!EmployeesCard);
    };
    return (
      <>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <NavLink
            to="/hr/announcement_profile"
            className="EmployeesCard_top_div_link"
            onMouseEnter={EmployeesCardImg}
            onMouseLeave={EmployeesCardImg}
          >
            <div className="EmployeesCard_top_div_main">
              <div className="EmployeesCard_top_div_main"></div>
              <div className="EmployeesCard_top_div">
                <div className=" position-relative">
                  <ProfileIcon
                    className="profile_card_icon"
                    backgroundImage={
                      EmployeesCard ? props.userIcon : props.setUserIcon
                    }
                  />
                </div>
                <h3>{EmployeesCard ? props.name : props.setName}</h3>
                <div className="EmployeesCard_text">
                  <span>
                    <AiOutlineMail />
                  </span>
                  <span>{EmployeesCard ? props.email : props.setEmail}</span>
                </div>
                <div className="EmployeesCard_text">
                  <span>
                    <IoCallOutline />
                  </span>
                  <span>
                    {EmployeesCard ? props.phoneNumber : props.setPhoneNumber}
                  </span>
                </div>
              </div>
              <div className="EmployeesCard_hr">
                <hr />
              </div>
              <div className="EmployeesCard_text_bottom">
                {EmployeesCard ? props.footerName : props.setFooterName}
              </div>
            </div>
          </NavLink>
        </div>
      </>
    );
  };
  const EmployeesCardAppData = [
    {
      setUserIcon: ProfilPhoto,
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      setName: "Gaurav Kaushik",
      email: "sunny@maxlence.com.au",
      setEmail: "gaurav@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      setPhoneNumber: "+91 000 1234 123",
      footerName: "react js developer",
      setFooterName: "HR Manager",
    },
    {
      setUserIcon: ProfilPhoto,
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      setName: "Gaurav Kaushik",
      email: "sunny@maxlence.com.au",
      setEmail: "gaurav@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      setPhoneNumber: "+91 000 1234 123",
      footerName: "react js developer",
      setFooterName: "HR Manager",
    },
    {
      setUserIcon: ProfilPhoto,
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      setName: "Gaurav Kaushik",
      email: "sunny@maxlence.com.au",
      setEmail: "gaurav@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      setPhoneNumber: "+91 000 1234 123",
      footerName: "react js developer",
      setFooterName: "HR Manager",
    },
    {
      setUserIcon: ProfilPhoto,
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      setName: "Gaurav Kaushik",
      email: "sunny@maxlence.com.au",
      setEmail: "gaurav@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      setPhoneNumber: "+91 000 1234 123",
      footerName: "react js developer",
      setFooterName: "HR Manager",
    },
    {
      setUserIcon: ProfilPhoto,
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      setName: "Gaurav Kaushik",
      email: "sunny@maxlence.com.au",
      setEmail: "gaurav@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      setPhoneNumber: "+91 000 1234 123",
      footerName: "react js developer",
      setFooterName: "HR Manager",
    },
    {
      setUserIcon: ProfilPhoto,
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      setName: "Gaurav Kaushik",
      email: "sunny@maxlence.com.au",
      setEmail: "gaurav@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      setPhoneNumber: "+91 000 1234 123",
      footerName: "react js developer",
      setFooterName: "HR Manager",
    },
    {
      setUserIcon: ProfilPhoto,
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      setName: "Gaurav Kaushik",
      email: "sunny@maxlence.com.au",
      setEmail: "gaurav@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      setPhoneNumber: "+91 000 1234 123",
      footerName: "react js developer",
      setFooterName: "HR Manager",
    },
    {
      setUserIcon: ProfilPhoto,
      userIcon: ProfilPhoto2,
      name: "sunny charkhwl",
      setName: "Gaurav Kaushik",
      email: "sunny@maxlence.com.au",
      setEmail: "gaurav@maxlence.com.au",
      phoneNumber: "+91 834 9933 768",
      setPhoneNumber: "+91 000 1234 123",
      footerName: "react js developer",
      setFooterName: "HR Manager",
    },
  ];
  return (
    <>
      <div className="EmployeesCard_container">
        <div>
          <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            {EmployeesCardAppData.map((val, i) => {
              return (
                <EmployeesCardApp
                  key={i}
                  footerName={val.footerName}
                  setFooterName={val.setFooterName}
                  phoneNumber={val.phoneNumber}
                  setPhoneNumber={val.setPhoneNumber}
                  email={val.email}
                  setEmail={val.setEmail}
                  name={val.name}
                  setName={val.setName}
                  userIcon={val.userIcon}
                  setUserIcon={val.setUserIcon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
