import { Post } from "../../../../common/components/post/Post";
import { PostUser } from "../../../../common/components/PostUser/PostUser";
import { UserPost } from "../../../../common/components/UserPost/UserPost";
// import { UserPost } from "../../../../common/components/UserPost/UserPost";

export const Index = () => {
  return (
    <>
      <Post />
      <PostUser />
      <UserPost />
    </>
  );
};
