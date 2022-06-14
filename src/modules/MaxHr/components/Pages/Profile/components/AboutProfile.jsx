import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import ProfilPhoto2 from "../../../../../../pics/profile2.jpeg";
import { useState } from "react";
import Input from "../../../../../common/components/input/Input";
import ProfileIcon from "../../../../../common/components/img/Img";
export const AboutProfile = () => {
  const [AboutProfileBtn, setAboutProfileBtn] = useState(true);
  const AboutProfileBtnOpen = () => {
    setAboutProfileBtn(!AboutProfileBtn);
  };
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
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="profile_iner_cont">
            <div
              className={`${
                AboutProfileBtn ? "AboutProfileBtn_pss" : "AboutProfileBtn_pss1"
              }`}
            >
              <div className="AboutProfileBtn_pss_top_div">
                <AboutProfileInput
                  label="Change Password"
                  type="password"
                  EyeIcon={true}
                  className="form-control"
                  placeholder="Password"
                />
              </div>
            </div>
            <div
              className={`${
                AboutProfileBtn
                  ? "AboutProfileBtn_pss3"
                  : "AboutProfileBtn_pss4"
              }`}
            >
              <div>
                <div className="AboutProfileBtn_pss_top_div">
                  <AboutProfileInput
                    label="New Password"
                    type="password"
                    EyeIcon={true}
                    className="form-control"
                    placeholder="Password"
                  />
                  <AboutProfileInput
                    label="Confirm password"
                    type="password"
                    EyeIcon={true}
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <button
              className="AboutProfile_pss_btn"
              onClick={AboutProfileBtnOpen}
            >
              {AboutProfileBtn ? "Change" : "Set New Password"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const AboutProfileInput = (props) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      <div className="ApprovalDetailsPage_date_picker">
        <label>{props.label}</label>
        <div className="ApprovalDetailsPage_date_picker_iner">
          <span onClick={() => setShowPass(!showPass)}>
            <p>
              {props.EyeIcon &&
                (showPass ? <AiFillEye /> : <AiFillEyeInvisible />)}
            </p>
          </span>
          <Input
            type={props.EyeIcon ? (showPass ? "text" : props.type) : props.type}
            className={props.className}
            placeholder={props.placeholder}
          />
        </div>
      </div>
    </>
  );
};
