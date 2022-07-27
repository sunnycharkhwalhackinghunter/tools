import Select from "react-select";
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

export const ActionOnAsset = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop
          title="Action On Asset"
          TilelIcon={<BsArrowLeft />}
          TitleLink={-1}
        />
        <div className="profile_iner_cont">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <div className="AddAsset_top_main_div">
                <div className="AddAsset_top_inner_div">
                  <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-2 col-sm-4 col-4">
                      <div>
                        <label className="all_page_my_label">
                          Delete Asset
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
                          Offline Asset
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
      <div>
        <div className="row TotalOpenings_input_main_div ">
          <div className="col-12">
            <TopPageTitle
              TitleLink={props.TitleLink}
              TilelIcon={props.TilelIcon}
              Name={props.title}
            />
          </div>
        </div>
      </div>
    </>
  );
};
const AddAssetForm = () => {
  const [modalShow1, setModalShow1] = React.useState(false);
  const options = [
    { value: "degital", label: "degital" },
    { value: "flowers", label: "flowers" },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-12">
          <div className="dashboard_top_week_Select">
            <label className="all_page_my_label">Type of Asset</label>
            <Select options={options} placeholder="Please pick a type" />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Asset Name"
            type="text"
            className="form-control"
            placeholder="What’s assets"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Asset Number"
            type="text"
            className="form-control"
            placeholder="What’s assets number"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="No of Asset"
            type="number"
            className="form-control"
            placeholder="0"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="In date"
            type="date"
            className="form-control"
            placeholder="0"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Purchased From"
            type="text"
            className="form-control"
            placeholder=" Purchased From"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Model"
            type="text"
            className="form-control"
            placeholder=" Model"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Supplier"
            type="text"
            className="form-control"
            placeholder="Supplier number"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Condition"
            type="text"
            className="form-control"
            placeholder="Condition"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Value"
            type="text"
            className="form-control"
            placeholder="Value"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Waranty in months"
            type="text"
            className="form-control"
            placeholder="Waranty in months"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Status"
            type="text"
            className="form-control"
            placeholder="Status"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <AboutProfileInput
            label="Asset User"
            type="text"
            className="form-control"
            placeholder="Who all can use it"
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
