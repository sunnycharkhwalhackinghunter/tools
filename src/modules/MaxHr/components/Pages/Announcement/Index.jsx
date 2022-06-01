import { BiWorld, BiChevronDown, BiEdit, BiComment } from "react-icons/bi";
import { AiOutlineShareAlt, AiFillStar } from "react-icons/ai";
import { BsSuitHeartFill, BsSuitHeart, BsReply } from "react-icons/bs";
import { useState } from "react";
import UserImg from "../../../../common/components/img/Img";
import UserIcon from "../../../../../pics/profile2.jpeg";
import AttachmentImg from "../../../../../pics/atc.png";
import { Accordion } from "react-bootstrap";
import CommentInput from "../../../../common/components/input/Input";
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
                <UserImg
                  className="PostUser_Comment_user_icon_img"
                  backgroundImage={AttachmentImg}
                />
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
  const [ReplyTop, setReplyTop] = useState(true);
  const StarColor = () => {
    setStar(!Star);
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
  const ReplyTopOpen = () => {
    setReplyTop(!ReplyTop);
  };
  const PostUserAppMain = (props) => {
    return (
      <>
        <div>
          <div className="row">
            <div className="col-12">
              <ul className="PostUser_Comment_user_icon_ul">
                <li>
                  <div className="PostUser_Comment_user_icon_div">
                    <UserImg
                      className="PostUser_Comment_user_icon"
                      backgroundImage={props.CommentIcon}
                    />
                  </div>
                </li>
                <li>
                  <div className="PostUser_user_icon_name">
                    <h3>{props.CommentName}</h3>
                  </div>
                </li>
              </ul>
              <div className="PostUser_sub_Comment_user">
                <p>{props.CommentText}</p>
              </div>
            </div>
          </div>
          <div>
            <SubComment onClick={ReplyTopOpen} />
          </div>
          <div className={`${ReplyTop ? "ReplyTop1" : "ReplyTop2"}`}>
            <div>
              <ul className="PostUser_Comment_user_icon_ul">
                <li>
                  <div className="PostUser_Comment_user_icon_div">
                    <UserImg
                      className="PostUser_Comment_user_icon"
                      backgroundImage={UserIcon}
                    />
                  </div>
                </li>
                <li className="w-100">
                  <div className="PostUser_user_icon_name">
                    <CommentInput
                      type="text"
                      className="form-control"
                      placeholder="Write a comment"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };
  const PostUserAppMainData = [
    {
      CommentIcon: UserIcon,
      CommentName: "Suman Gupta",
      CommentText: "27th Nov - Happy Birthday!",
      cat1: [
        {
          CommentIcon: UserIcon,
          CommentName: "Suman Gupta",
          CommentText: "27th Nov - Happy Birthday!",
        },
      ],
    },
  ];
  return (
    <>
      <div className="Announcement_iner mb-4 position-relative">
        <div className="PostUser_top_profile_div">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 position-relative">
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
        <div className="post_user_Comment2">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <div className="post_user_Comment_iner ">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                    <div>
                      <div
                        className="PostUser_user_icon_name_Heart"
                        // className={`${
                        //   Heart
                        //     ? "PostUser_user_icon_name_Heart"
                        //     : "PostUser_user_icon_name_Heart2"
                        // }`}
                      >
                        {/* <div onClick={HeartColor}>
                          {Heart ? <BsSuitHeart /> : <BsSuitHeartFill />}
                        </div> */}
                        <div>
                          <input id="toggle-heart" type="checkbox" />
                          <label htmlFor="toggle-heart">❤</label>
                        </div>
                        <p>Suman and 24 others</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                    <Accordion.Header>
                      <span>
                        <BiComment />
                      </span>
                      9 Comment
                    </Accordion.Header>
                  </div>
                </div>
              </div>
              <Accordion.Body>
                {PostUserAppMainData.map((val, i) => {
                  return (
                    <PostUserAppMain
                      key={i}
                      CommentIcon={val.CommentIcon}
                      CommentName={val.CommentName}
                      CommentText={val.CommentText}
                      arr={val}
                    />
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};
const SubComment = (props) => {
  const [Heart, setHeart] = useState(true);
  const HeartColor = () => {
    setHeart(!Heart);
  };

  const PostUserApp = (props) => {
    const [Reply, setReply] = useState(true);
    const [Heart, setHeart] = useState(true);
    const HeartColor = () => {
      setHeart(!Heart);
    };
    const ReplyOpen = () => {
      setReply(!Reply);
    };
    return (
      <>
        <div className="row">
          <div className="col-12">
            <ul className="PostUser_Comment_user_icon_ul">
              <li>
                <div className="PostUser_Comment_user_icon_div">
                  <UserImg
                    className="PostUser_Comment_user_icon"
                    backgroundImage={props.icon}
                  />
                </div>
              </li>
              <li>
                <div className="PostUser_user_icon_name">
                  <h3>{props.UserName}</h3>
                </div>
              </li>
            </ul>
            <div className="PostUser_sub_Comment_user">
              <p>{props.text}</p>
            </div>
            <div>
              <div className="post_user_Comment_iner pt-1">
                <div className="post_user_sub_Comment_iner">
                  <div className="post_user_sub_option">
                    <div>
                      <div
                        className={`${
                          Heart
                            ? "PostUser_user_icon_name_Heart"
                            : "PostUser_user_icon_name_Heart3"
                        }`}
                      >
                        <div onClick={HeartColor}>
                          {Heart ? <BsSuitHeart /> : <BsSuitHeartFill />}
                        </div>
                        <p>likes</p>
                      </div>
                    </div>
                  </div>
                  <div className="post_user_sub_option">
                    <div className="replay_user" onClick={ReplyOpen}>
                      <span>
                        <BsReply />
                      </span>
                      Reply
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${Reply ? "Reply1" : "Reply2"}`}>
                <ul className="PostUser_Comment_user_icon_ul">
                  <li>
                    <div className="PostUser_Comment_user_icon_div">
                      <UserImg
                        className="PostUser_Comment_user_icon"
                        backgroundImage={UserIcon}
                      />
                    </div>
                  </li>
                  <li className="w-100">
                    <div className="PostUser_user_icon_name">
                      <CommentInput
                        type="text"
                        className="form-control"
                        placeholder="Write a comment"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const PostUserAppData = [
    {
      icon: UserIcon,
      UserName: "UserName",
      text: "Total Employees",
    },
    {
      icon: UserIcon,
      UserName: "UserName",
      text: "Total Employees",
    },
    {
      icon: UserIcon,
      UserName: "UserName",
      text: "Total Employees",
    },
  ];
  return (
    <>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="2">
          <div className="post_user_Comment_iner pt-1">
            <div className="post_user_sub_Comment_iner">
              <div className="post_user_sub_option">
                <div>
                  <div
                    className={`${
                      Heart
                        ? "PostUser_user_icon_name_Heart"
                        : "PostUser_user_icon_name_Heart3"
                    }`}
                  >
                    <div onClick={HeartColor}>
                      {Heart ? <BsSuitHeart /> : <BsSuitHeartFill />}
                    </div>
                    <p>likes</p>
                  </div>
                </div>
              </div>
              <div className="post_user_sub_option">
                <Accordion.Header>
                  <span>
                    <BsReply />
                  </span>
                  <span onClick={props.onClick}> Reply</span>
                </Accordion.Header>
              </div>
            </div>
          </div>
          <Accordion.Body>
            <div className="post_sub_user">
              {PostUserAppData.map((val, i) => {
                return (
                  <PostUserApp
                    key={i}
                    icon={val.icon}
                    UserName={val.UserName}
                    text={val.text}
                  />
                );
              })}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
