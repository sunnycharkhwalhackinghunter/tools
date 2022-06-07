import { Nav, Tab } from "react-bootstrap";
import { PagesTopTitle } from "../../../components/Pages/Dashboard/index";
import Select from "react-select";
import { useState } from "react";
import Input from "../../../../common/components/input/Input";
import { IoSearchOutline } from "react-icons/io5";
import ProfileIcon from "../../../../common/components/img/Img";
import ProfilPhoto from "../../../../../pics/profile.jpeg";
import ProfilPhoto2 from "../../../../../pics/profile2.jpeg";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Post, PostUser } from "../Announcement/Index";
export const Tabs = () => {
  return (
    <>
      <div className="profile_tab_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <PagesTopTitle title="Profile" />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <EmployeesTop />
            </Tab.Pane>
          </Tab.Content>
          <Nav variant="pills" className="flex">
            <Nav.Item>
              <Nav.Link eventKey="first">My Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Employees</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <EmployeesProfileCard />
              <InerNewTab />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <EmployeesCard />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
const InerNewTab = () => {
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="profile_tab_div2">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-8 col-sm-12 col-12">
              <Nav variant="pills" className="flex">
                <Nav.Item>
                  <Nav.Link eventKey="first">Announcement</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second1">Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second2">Document</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
              <div>
                <div className="dashboard_top_week_Select">
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tab.Content>
          <Tab.Pane eventKey="first">
            <div className="m_t"></div>
            <Post />
            <PostUser />
            <PostUser />
            <PostUser />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <div className="m_t"></div>
            <div>
              <AboutProfile />
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second1">
            <div className="m_t"></div>3
          </Tab.Pane>
          <Tab.Pane eventKey="secon2">
            <div className="m_t"></div>4
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};
const EmployeesTop = () => {
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div className="row">
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <PagesTopTitle title="Employees Profile" />
        </div>
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 position-relative">
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
    </>
  );
};
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
            to="/"
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
const EmployeesProfileCard = () => {
  return (
    <>
      <div className="EmployeesProfileCard_top_div">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className=" EmployeesProfileCard_icon_div_main">
              <div className="EmployeesProfileCard_icon_div">
                <ProfileIcon
                  className="EmployeesProfileCard_icon"
                  backgroundImage={ProfilPhoto2}
                />
              </div>
              <div className="EmployeesProfileCard_text_div">
                <h3>gaurav Kaushik</h3>
                <p>
                  hR Manager <span>ID: MXHR02</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 EmployeesProfileCard_div_info">
            <div className="EmployeesProfileCard_info">
              <p>
                <span>
                  <AiOutlineMail />
                </span>
                gaurav@maxlence.com.au
              </p>
              <p>
                <span>
                  <IoCallOutline />
                </span>
                +91 834 9933 768
              </p>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 EmployeesProfileCard_div_info">
            <div className="EmployeesProfileCard_info_user">
              <p>
                Reporting to:
                <span> Shived Bansel</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AboutProfile = () => {
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="profile_iner_cont">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 AboutProfile_img_div_col">
                <div className="AboutProfile_img_div">
                  <ProfileIcon
                    className="AboutProfile_img"
                    backgroundImage={ProfilPhoto2}
                  />
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <AboutProfileInput
                      label="first name"
                      type="text"
                      className="form-control"
                      placeholder="Gaurav"
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <AboutProfileInput
                      type="text"
                      label="last name"
                      className="form-control"
                      placeholder="Kaushik"
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <AboutProfileInput
                      type="text"
                      label="State"
                      className="form-control"
                      placeholder="Utter Pradesh"
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <AboutProfileInput
                      label="Gender"
                      type="text"
                      className="form-control"
                      placeholder="Male"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <AboutProfileInput
                  label="Date of Bitrh"
                  type="date"
                  className="form-control"
                  placeholder="Male"
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="ApprovalDetailsPage_date_picker">
                  <label>Relationship Status</label>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-check form_check_label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Single
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check form_check_label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label "
                        htmlFor="flexRadioDefault2"
                      >
                        Married
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="ApprovalDetailsPage_date_picker">
                  <label>Blood Group</label>
                  <select className="form-select">
                    <option>AB Positive</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                  </select>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <AboutProfileInput
                  label="Personal Contact number"
                  type="number"
                  className="form-control"
                  placeholder="982-492-0322"
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <AboutProfileInput
                  label="Emergency Contact Number"
                  type="number"
                  className="form-control"
                  placeholder="918-233-2345"
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <AboutProfileInput
                  label="email"
                  type="email"
                  className="form-control"
                  placeholder="gaurav@maxlence.com.au"
                />
              </div>
              <div className="col-12">
                <div className="ApprovalDetailsPage_date_picker">
                  <label>Local Address</label>
                  <textarea
                    className="form-control"
                    placeholder="Street Name: 55 Railrode Ave, City: Norwood, State: Massachusetts, Zip: 02062,Country: India"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check AboutProfile_check_btn">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Same as Permanent address
                  </label>
                </div>
                <div className=" text-capitalize text-center">
                  <button className=" ApprovalDetailsPage_btn">save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div>jfnvjf</div>
        </div>
      </div>
    </>
  );
};

const AboutProfileInput = (props) => {
  return (
    <>
      <div className="ApprovalDetailsPage_date_picker">
        <label>{props.label}</label>
        <Input
          type={props.type}
          className={props.className}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};
