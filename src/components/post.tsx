import { Post } from "@prisma/client";

interface PostProps {
  post: Post;
}
const Post = ({ post }: PostProps) => {
  return (
    <div className="flex">
      <div className="bg-red h-20 w-20"></div>
      <div>
        <h4>{post.title}</h4>
      </div>
    </div>
  );
};

export default Post;
