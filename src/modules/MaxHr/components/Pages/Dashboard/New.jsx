import IconImg from "../../../../common/components/img/Img";

const New = (props) => {
  return (
    <>
      <div>
        <div className="celebrations_card_line_title">
          <p>{props.toptitle}</p>
          <hr />
        </div>
        {props.arr.cat1.map((val, i) => {
          return (
            <div key={i} className="celebrations_card_img_top_div">
              <div className="row ">
                <div className="col-2">
                  <IconImg
                    className="celebrations_card_img"
                    backgroundImage={val.userImg}
                  />
                </div>
                <div className="col-7">
                  <div className="celebrations_card_user_info">
                    <h5>{val.name}</h5>
                    <p>{val.DOB}</p>
                  </div>
                </div>
                <div className="col-3 celebrations_card_icon_div">
                  <IconImg
                    className="celebrations_card_img_icon"
                    backgroundImage={val.BirthdayImg}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default New;
