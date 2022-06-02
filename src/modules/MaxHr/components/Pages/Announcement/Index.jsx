import { BiWorld, BiChevronDown, BiEdit } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { AiOutlineShareAlt, AiFillStar } from "react-icons/ai";
import { BsSuitHeartFill, BsSuitHeart, BsReply } from "react-icons/bs";
import { useState } from "react";
import UserImg from "../../../../common/components/img/Img";
import UserIcon from "../../../../../pics/profile2.jpeg";
import AttachmentImg from "../../../../../pics/atc.png";
import Car from "../../../../../pics/car.png";
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
  return (
    <>
      <div className="Announcement_iner mb-4 position-relative">
        <div className="PostUser_top_profile_div">
          <UserUi
            name="Gaurav Kaushik"
            time="5 Seconds ago"
            SubName="@Everyone"
          />
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
          </div>
          <EditPost />
        </div>
        <div className="post_textarea_hr">
          <hr />
        </div>
        <CommentUiApp />
      </div>
    </>
  );
};
export const UserPost = () => {
  return (
    <>
      <div className="Announcement_iner mb-4">
        <div className="UserPost_top_div">
          <UserUi name="Gaurav Kaushik" time="5 Seconds ago" SubName="@SEO" />
          <EditPost />
          <div>
            <UserImg className="UserPost_img shadow" backgroundImage={Car} />
          </div>
        </div>
        <div className="post_textarea_hr">
          <hr />
        </div>
        <CommentUiApp />
      </div>
    </>
  );
};
const CommentUiApp = () => {
  const PostUserAppMain = (props) => {
    const [Heart, setHeart] = useState(true);
    const [Reply, setReply] = useState(true);
    const [ReplyTop, setReplyTop] = useState(true);
    const HeartColor = () => {
      setHeart(!Heart);
    };
    const ReplyOpen = () => {
      setReply(!Reply);
    };
    const ReplyTopOpen = () => {
      setReplyTop(!ReplyTop);
    };
    return (
      <>
        <div>
          <div className="row">
            <div className="col-12">
              <CommentUi
                CommentIcon={props.CommentIcon}
                CommentName={props.CommentName}
                CommentText={props.CommentText}
              />
            </div>
          </div>
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
                <div className="replay_user_btn_div">
                  <span>
                    <BsReply />
                  </span>
                  <span className="top_Replyy" onClick={ReplyTopOpen}>
                    Replyy
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            {props.arr.cat1.map((val, i) => {
              return (
                <div key={i}>
                  <div className={`${ReplyTop ? "ReplyTop3" : "ReplyTop4"}`}>
                    <div className="post_sub_user">
                      <div className="row">
                        <div className="col-12">
                          <CommentUi
                            CommentIcon={val.icon}
                            CommentName={val.UserName}
                            CommentText={val.text}
                          />
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
                                        {Heart ? (
                                          <BsSuitHeart />
                                        ) : (
                                          <BsSuitHeartFill />
                                        )}
                                      </div>
                                      <p>likes</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="post_user_sub_option">
                                  <div
                                    className="replay_user"
                                    onClick={ReplyOpen}
                                  >
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
                    </div>
                  </div>
                </div>
              );
            })}
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
          icon: UserIcon,
          UserName: "Suman Gupta",
          text: "27th Nov - Happy Birthday!",
        },
      ],
    },
    {
      CommentIcon: UserIcon,
      CommentName: "Suman Gupta",
      CommentText: "27th Nov - Happy Birthday!",
      cat1: [
        {
          icon: UserIcon,
          UserName: "Suman Gupta",
          text: "27th Nov - Happy Birthday!",
        },
        {
          icon: UserIcon,
          UserName: "Suman Gupta",
          text: "27th Nov - Happy Birthday!",
        },
      ],
    },
  ];
  return (
    <>
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
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 GoComment_me">
                  <Accordion.Header>
                    <span>
                      <GoComment />
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
              <div>
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
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};
const CommentUi = (props) => {
  return (
    <>
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
    </>
  );
};
const UserUi = (props) => {
  const [PostTextareaOption, setPostTextareaOption] = useState(true);
  const [Star, setStar] = useState(true);

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
  return (
    <>
      <div className="Announcement_iner mb-4">
        <div>
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
                    <h3>{props.name}</h3>
                    <p>{props.time}</p>
                  </div>
                </li>
                <li>
                  <div className="PostUser_user_icon_name_prv">
                    <p onClick={PostTextareaOptionOpen}>{props.SubName}</p>
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
        </div>
      </div>
    </>
  );
};
const EditPost = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="PostUser_post_edit">
            <BiEdit />
          </div>
        </div>
      </div>
    </>
  );
};
