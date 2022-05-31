import { BiWorld, BiChevronDown, BiEdit, BiComment } from "react-icons/bi";
import { AiOutlineShareAlt, AiFillStar } from "react-icons/ai";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { CgAttachment } from "react-icons/cg";
import { useState } from "react";
import UserImg from "../../../../common/components/img/Img";
import UserIcon from "../../../../../pics/profile2.jpeg";
import { Accordion } from "react-bootstrap";
export const Post = () => {
  const [PostTextareaOption, setPostTextareaOption] = useState(true);
  const PostTextareaOptionOpen = () => {
    setPostTextareaOption(!PostTextareaOption);
  };
  const PostList = (props) => {
    return (
      <>
        <li>{props.list}</li>
      </>
    );
  };
  const PostListData = [
    {
      list: "Everyone",
    },
    {
      list: "design",
    },
    {
      list: "marketing",
    },
    {
      list: "development",
    },
  ];
  return (
    <>
      <div className="Announcement_iner mb-4 position-relative">
        <div className="post_textarea">
          <textarea
            className="form-control"
            rows="5"
            placeholder="How is your day today!....."
          ></textarea>
        </div>
        <div className="post_textarea_hr">
          <hr />
        </div>
        <div className="post_textarea_option">
          <div className="row">
            <div className="col-10">
              <div
                className="post_textarea_option_iner_main_div"
                onClick={PostTextareaOptionOpen}
              >
                <span>
                  <BiWorld />
                </span>
                <p>Everyone can view</p>
                <div>
                  <BiChevronDown />
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="post_textarea_Attachment">
                <CgAttachment />
              </div>
            </div>
          </div>
          <div
            className={`${
              PostTextareaOption ? "PostTextareaOption" : "PostTextareaOption2"
            }`}
          >
            <div className="post_textarea_option_iner_option">
              <ul>
                {PostListData.map((val, i) => {
                  return <PostList key={i} list={val.list} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const PostUser = () => {
  const [PostTextareaOption, setPostTextareaOption] = useState(true);
  const [Star, setStar] = useState(true);
  const [Heart, setHeart] = useState(true);
  const StarColor = () => {
    setStar(!Star);
  };
  const HeartColor = () => {
    setHeart(!Heart);
  };

  const PostTextareaOptionOpen = () => {
    setPostTextareaOption(!PostTextareaOption);
  };
  const PostList = (props) => {
    return (
      <>
        <li>{props.list}</li>
      </>
    );
  };
  const PostListData = [
    {
      list: "Everyone",
    },
    {
      list: "design",
    },
    {
      list: "marketing",
    },
    {
      list: "development",
    },
  ];
  return (
    <>
      <div className="Announcement_iner mb-4 position-relative">
        <div className="PostUser_top_profile_div">
          <div
            className={`${
              PostTextareaOption ? "PostUser_Option" : "PostUser_Option2"
            }`}
          >
            <div className="post_textarea_option_iner_option">
              <ul>
                {PostListData.map((val, i) => {
                  return <PostList key={i} list={val.list} />;
                })}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
              <ul className="PostUser_user_icon_ul">
                <li>
                  <div className="PostUser_user_icon_div">
                    <UserImg
                      className="PostUser_user_icon"
                      backgroundImage={UserIcon}
                    />
                  </div>
                </li>
                <li>
                  <div className="PostUser_user_icon_name">
                    <h3>pramod Dishantri</h3>
                    <p>3 hours ago</p>
                  </div>
                </li>
                <li>
                  <div className="PostUser_user_icon_name_prv">
                    <p onClick={PostTextareaOptionOpen}>@Everyone</p>
                  </div>
                </li>
                <li>
                  <div className="PostUser_user_icon_name_share">
                    <p>
                      <AiOutlineShareAlt onClick={PostTextareaOptionOpen} />
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
              <div className="PostUser_user_icon_name_star_top_div">
                <div
                  className={`${
                    Star
                      ? "PostUser_user_icon_name_star"
                      : "PostUser_user_icon_name_star2"
                  }`}
                >
                  <AiFillStar onClick={StarColor} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="PostUser_text">
                <p>
                  “Give yourself credit for the days you have made it through,
                  when you thought you couldn’t” Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Eligendi cupiditate vel nobis
                  enim magnam, inventore ipsa saepe rerum est quidem quis
                  voluptatibus quia error voluptate ullam mollitia deserunt unde
                  recusandae.
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="PostUser_post_edit">
                <BiEdit />
              </div>
            </div>
          </div>
        </div>
        <div className="post_textarea_hr">
          <hr />
        </div>
        <div className="post_user_Comment">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <div className="post_user_Comment_iner">
                <div className="row">
                  <div className="col-10">
                    <div>
                      <div
                        className={`${
                          Heart
                            ? "PostUser_user_icon_name_Heart"
                            : "PostUser_user_icon_name_Heart2"
                        }`}
                      >
                        <div onClick={HeartColor}>
                          {Heart ? <BsSuitHeart /> : <BsSuitHeartFill />}
                          <p>You, Suman and 24 others</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <Accordion.Header>
                      <span>
                        <BiComment />
                      </span>
                      9 Comment
                    </Accordion.Header>
                  </div>
                </div>
              </div>
              <Accordion.Body>1</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};
