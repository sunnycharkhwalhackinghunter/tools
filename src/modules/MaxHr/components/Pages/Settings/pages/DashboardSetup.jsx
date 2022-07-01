import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";
import Select from "react-select";
import IconApp from "../../../../../common/components/img/Img";
import Icon from "../../../../../../pics/drag.png";
import Icon2 from "../../../../../../pics/color.png";
import { useState } from "react";
import useClickOutside from "../../../../CustomHooks/ClickOutside";
import { SketchPicker } from "react-color";

export const DashboardSetup = () => {
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div className="custom_container">
        <TopPageTitle
          TitleLink={-1}
          TilelIcon={<BsArrowLeft />}
          Name="Settings"
        />
        <div className="dashboard_setup_top_main_div">
          <div className="dashboard_setup_top_main_div_inner">
            <div>
              <div className="dashboard_setup_title">
                <h3>Show data on Dashboard by</h3>
              </div>
              <div className="dashboard_setup_text_div">
                <div className="dashboard_setup_select_div">
                  <div className="dashboard_top_week_Select">
                    <Select options={options} placeholder="This week" />
                  </div>
                </div>
              </div>
            </div>
            <DashboardSetupData />
          </div>
        </div>
      </div>
    </>
  );
};
const DashboardSetupData = () => {
  const [ColorPicker, setColorPicker] = useState(false);
  const ColorPickerOpen = () => {
    setColorPicker(!ColorPicker);
  };
  let domNode = useClickOutside(() => {
    setColorPicker(false);
  });
  const DashboardSetupDataApp = (props) => {
    return (
      <>
        <div>
          <div className="dashboard_setup_title">
            <h3 className="dashboard_setup_title_inner">
              {props.toptitle}
              <span>
                <IconApp
                  className="dashboard_setup_icon"
                  backgroundImage={Icon}
                />
              </span>
            </h3>
          </div>
          {props.arr.cat1.map((val, i) => {
            return (
              <div key={i} className="dashboard_setup_text_div">
                <div className="row dashboard_setup_icon_div">
                  <div className="col-8">
                    <div className="automation_checkbox_div">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault1"
                        />
                        <label
                          className="form-check-label automation_checkbox_label"
                          htmlFor="flexCheckDefault1"
                        >
                          {val.label}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className=" d-flex">
                      <IconApp
                        className="dashboard_setup_icon"
                        backgroundImage={Icon}
                      />
                      <IconApp
                        className="dashboard_setup_icon"
                        backgroundImage={Icon2}
                      />
                      <div
                        onClick={ColorPickerOpen}
                        className="dashboard_setup_color"
                        style={{ backgroundColor: val.color }}
                      ></div>
                      <div ref={domNode}>
                        {ColorPicker ? (
                          <SketchPicker className="color_picker2" />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  const DashboardSetupDataData = [
    {
      toptitle: "Company Setup",
      cat1: [
        {
          label: "Company Setup",
          color: "#0043CE",
        },
      ],
    },
  ];
  return (
    <>
      {DashboardSetupDataData.map((val, i) => {
        return (
          <DashboardSetupDataApp key={i} toptitle={val.toptitle} arr={val} />
        );
      })}
    </>
  );
};
