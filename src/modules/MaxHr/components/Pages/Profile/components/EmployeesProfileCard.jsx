import ProfileIcon from "../../../../../common/components/img/Img";
import ProfilPhoto2 from "../../../../../../pics/profile2.jpeg";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
export const EmployeesProfileCard = () => {
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
                  hR Manager <span>ID: MXHR02</span>
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
