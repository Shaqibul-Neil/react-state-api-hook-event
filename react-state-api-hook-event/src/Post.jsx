const Post = ({ post }) => {
  console.log(post);
  const { title, body, userId } = post;
  return (
    <div>
      <h4>User Id: {userId}</h4>
      <div className="card">
        <h5>Title: {title}</h5>
        <h5>Message: {body}</h5>
      </div>
    </div>
  );
};
export default Post;
