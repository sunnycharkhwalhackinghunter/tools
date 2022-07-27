import { AiOutlineClose } from "react-icons/ai";
import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { AboutProfileInput } from "../Profile/components/AboutProfile";
import { NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Logo from "../../../../common/components/img/Img";
import GifPhoto from "../../../../../pics/su.gif";
import SwitchInput from "../../../../common/components/input/Input";
import React from "react";

export const ActionOnContractor = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <div className="profile_iner_cont">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <div className="AddAsset_top_main_div">
                <div className="AddAsset_top_inner_div">
                  <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-2 col-sm-4 col-4">
                      <div>
                        <label className="all_page_my_label">
                          Disable Login
                        </label>
                        <div className=" mb-3">
                          <label className="switch">
                            <SwitchInput
                              type="checkbox"
                              className="switch_input"
                            />
                            <span className="slider slider2 round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-8 col-8">
                      <div>
                        <label className="all_page_my_label">Details</label>
                        <div className="ActionOnAsset_text_div">
                          <p>If it is on, Details will be here</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                      <AboutProfileInput
                        label="Comment"
                        type="text"
                        className="form-control"
                        placeholder="Add your comment"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr />
            </div>
            <div className="col-12">
              <div className="AddAsset_top_main_div">
                <div className="AddAsset_top_inner_div">
                  <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-2 col-sm-4 col-4">
                      <div>
                        <label className="all_page_my_label">
                          Remove Contractor
                        </label>
                        <div className=" mb-3">
                          <label className="switch">
                            <SwitchInput
                              type="checkbox"
                              className="switch_input"
                            />
                            <span className="slider slider2 round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-8 col-8">
                      <div>
                        <label className="all_page_my_label">Details</label>
                        <div className="ActionOnAsset_text_div">
                          <p>By Gaurav Kaushik on 24/05/2022</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                      <AboutProfileInput
                        label="Comment"
                        type="text"
                        className="form-control"
                        placeholder="Comment your concern"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr />
            </div>
            <div className="col-12">
              <div className="AddAsset_top_main_div">
                <div className="AddAsset_top_inner_div">
                  <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-2 col-sm-4 col-4">
                      <div>
                        <label className="all_page_my_label">
                          Hold Payment
                        </label>
                        <div className=" mb-3">
                          <label className="switch">
                            <SwitchInput
                              type="checkbox"
                              className="switch_input"
                            />
                            <span className="slider slider2 round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-8 col-8">
                      <div>
                        <label className="all_page_my_label">Details</label>
                        <div className="ActionOnAsset_text_div">
                          <p>By Gaurav Kaushik on 24/05/2022</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                      <AboutProfileInput
                        label="Comment"
                        type="text"
                        className="form-control"
                        placeholder="Misconduct"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr />
            </div>
          </div>
          <div className="AddAsset_top_main_div">
            <div className="AddAsset_top_inner_div">
              <AddAssetForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const PageTop = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <TopPageTitle
            Name="My Performance"
            TitleLink={-1}
            TilelIcon={<BsArrowLeft />}
          />
        </div>
      </div>
    </>
  );
};
const AddAssetForm = () => {
  const [modalShow1, setModalShow1] = React.useState(false);

  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-12">
          <AboutProfileInput
            label="Full Name"
            type="text"
            className="form-control"
            placeholder="Soham Kumar"
          />
        </div>
        <div className="col-12">
          <AboutProfileInput
            label="Office Address"
            type="text"
            className="form-control"
            placeholder="5th Floor, Tower A, Spaze iTech Park, Unit No. 512, Sohna "
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Department"
            type="text"
            className="form-control"
            placeholder="Design"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Title"
            type="text"
            className="form-control"
            placeholder="Associate Designer"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Reporting Day"
            type="date"
            className="form-control"
            placeholder="25/04/2022"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <label className="all_page_my_label">Working Hours</label>
          <div className="row Onboard_date_div">
            <div className="col-5">
              <AboutProfileInput
                type="time"
                className="form-control"
                placeholder="Soham Kumar"
              />
            </div>
            <div className="col-2">
              <div>
                <p>to</p>
              </div>
            </div>
            <div className="col-5">
              <AboutProfileInput
                type="time"
                className="form-control"
                placeholder="Soham Kumar"
              />
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="ApprovalDetailsPage_date_picker">
            <label>Reporting Person</label>
            <select className="form-select">
              <option>Shived Bansal</option>
              <option>Shived Bansal</option>
              <option>Shived Bansal</option>
            </select>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Pay/project"
            type="number"
            className="form-control"
            placeholder="2500"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Candidate’s personal email address"
            type="text"
            className="form-control"
            placeholder="soham@gmail.com"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Candidate’s personal Contact Number"
            type="text"
            className="form-control"
            placeholder="+91 834 9933 768"
          />
        </div>
        <div className="col-12">
          <div className="IssueAssets_btn_bottom_div IssueAssets_btn_bottom_div2 mt-0">
            <div>
              <div>
                <NavLink to={-1}>
                  <button className="IssueAssets_btn3 mx-1">Cancel</button>
                </NavLink>
              </div>
            </div>
            <div>
              <button
                className="IssueAssets_btn2 mx-1"
                onClick={() => setModalShow1(true)}
              >
                save
              </button>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Success show={modalShow1} onHide={() => setModalShow1(false)} />
        </div>
      </div>
    </>
  );
};

const Success = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="UploadDocumentModal_body bg-white">
        <div className="UploadDocumentModal_body_close_btn">
          <span onClick={props.onHide}>
            <AiOutlineClose />
          </span>
        </div>

        <div>
          <Logo className="success_gif" backgroundImage={GifPhoto} />
        </div>
        <p className="UploadDocumentModal_body_title text-center">Success</p>
        <div className="UploadDocumentModal_body_btn_div">
          <button
            className="UploadDocumentModal_body_btn"
            onClick={props.onHide}
          >
            ok
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
