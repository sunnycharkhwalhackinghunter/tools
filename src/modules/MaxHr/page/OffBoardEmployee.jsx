import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Select from "react-select";
import React from "react";
import { useState } from "react";
import Input from "../../common/components/input/Input";
import { IoSearchOutline } from "react-icons/io5";
import ProfilPhoto from "../../../pics/profile.jpeg";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import ProfileIcon from "../../common/components/img/Img";
import ProfilPhoto2 from "../../../pics/profile2.jpeg";
const OffBoardEmployee = () => {
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div className="custom_container">
        <div className="row">
          <div className=" col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <NavLink to={-1} className="profil_emp_inter_page_title">
              <BsArrowLeft />
              Off Board Employee
            </NavLink>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="profile_top_title2">
              <div className="profile_top_title_iner_div">
                <div className="dashboard_top_week_Select">
                  <Select options={options} placeholder="Department" />
                </div>
                <div className="profile_input_div">
                  <span>
                    <IoSearchOutline />
                  </span>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Search by name, email or department"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <EmployeesCard />
      </div>
    </>
  );
};
export default OffBoardEmployee;

const EmployeesCard = () => {
  const EmployeesCardApp = (props) => {
    const [EmployeesCard, setEmployeesCard] = useState(true);
    const EmployeesCardImg = () => {
      setEmployeesCard(!EmployeesCard);
    };
    return (
      <>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <NavLink
            to={-1}
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
