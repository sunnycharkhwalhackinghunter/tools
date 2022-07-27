import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import Img from "../../../../common/components/img/Img";
import Icon from "../../../../../pics/assitIcon.png";
import Icon3 from "../../../../../pics/assitIcon3.png";
export const AssetIndex = () => {
  return (
    <>
      <Top />
      <AssetCard />
      <AssetList />
    </>
  );
};
const Top = () => {
  return (
    <>
      <div className="row">
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-5 col-5">
          <TopPageTitle Name="Asset Mangement" />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7 MyAttendence_next_page">
          <NavLink to="/hr/add_asset">
            <span>Add Asset</span>
            <BsArrowRight />
          </NavLink>
        </div>
      </div>
    </>
  );
};
const AssetList = (props) => {
  const AssetListData = [
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
    {
      AssetName: "Flower Pot",
      AssetNo: "Ad12ximjjsov",
      date: "05/25/2021",
      NoOfAsset: "01",
      Time: "24 Day",
      Amount: "12000",
    },
  ];
  const AssetListApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.AssetName}</td>
          <td>{props.AssetNo}</td>
          <td>{props.date}</td>
          <td>{props.NoOfAsset}</td>
          <td>{props.Time}</td>
          <td>{props.Amount}</td>
          <td>
            <span className="reimbursement_view_btn">
              <NavLink to="/hr/action_Asset">Action</NavLink>
            </span>
          </td>
        </tr>
      </>
    );
  };
  const options = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  return (
    <>
      <div className="custom_container_iner">
        <div>
          <div className="row g-3">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="ApprovalDetailsPage_date_picker">
                <label>From</label>
                <Input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="ApprovalDetailsPage_date_picker">
                <label>to</label>
                <Input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
              <div className="dashboard_top_week_Select">
                <Select options={options} placeholder="Departments" />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
              <div className="dashboard_top_week_Select">
                <Select options={options} placeholder="Sort by" />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
              <div className="ApprovalDetailsPage_date_picker">
                <div className="ApprovalDetailsPage_search_input_iner_div">
                  <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ApprovalDetailsPage_top_div">
          <table className="table table-hover Asset_main_div text-center text-capitalize">
            <thead>
              <tr className="ApprovalDetailsPage_thead_tr">
                <th scope="col">Asset Name</th>
                <th scope="col">Asset No.</th>
                <th scope="col">Date</th>
                <th scope="col">No. of Asset</th>
                <th scope="col">Issued Time</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {AssetListData.map((val, i) => {
                return (
                  <AssetListApp
                    key={i}
                    AssetName={val.AssetName}
                    AssetNo={val.AssetNo}
                    date={val.date}
                    NoOfAsset={val.NoOfAsset}
                    Time={val.Time}
                    Amount={val.Amount}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
const AssetCard = () => {
  const AssetCardApp = (props) => {
    return (
      <>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="asset_card">
            <div>
              <Img className="asset_card_icon" backgroundImage={props.Icon} />
            </div>
            <div className="asset_card_text_div">
              <h3>{props.number}</h3>
              <p>{props.text}</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  const AssetCardData = [
    {
      Icon: Icon,
      number: "66",
      text: "Number of Asset",
    },
    {
      Icon: Icon,
      number: "66",
      text: "Issued to Employees",
    },
    {
      Icon: Icon3,
      number: "$108,000",
      text: "Value of Asset",
    },
    {
      Icon: Icon3,
      number: "$108,000",
      text: "Purchases in Fascal Year",
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 mb-4">
        {AssetCardData.map((val, i) => {
          return (
            <AssetCardApp
              key={i}
              Icon={val.Icon}
              number={val.number}
              text={val.text}
            />
          );
        })}
      </div>
    </>
  );
};
