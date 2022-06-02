import {
  Post,
  PostUser,
  UserPost,
} from "../components/Pages/Announcement/Index";
const Announcement = () => {
  return (
    <>
      <div className="custom_container">
        <Post />
        <PostUser />
        <UserPost />
      </div>
    </>
  );
};

export default Announcement;
