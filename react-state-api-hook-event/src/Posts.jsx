import { use } from 'react';
import Post from './Post';

const Posts = ({ postPromise }) => {
  const posts = use(postPromise);
  //console.log(posts);
  return (
    <div className="counter">
      <h2>All Posts : {posts.length}</h2>
      <div className="postContainer">
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
export default Posts;
