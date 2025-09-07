import React from 'react';
import { useRecoilState } from 'recoil';
import { postState } from './state/postAtom';

function PostItem({ id }) {
  const [posts, setPosts] = useRecoilState(postState);

  const post = posts.find(p => p.id === id); //finding post using Id.

  function handleLike() {
    setPosts(posts.map(p =>
      p.id === id ? { ...p, likes: p.likes + 1 } : p
    ));
  }

  return (
    <div>
      <p>Post Content: {post.title}</p>
      <p>Likes: {post.likes}</p>
      <button onClick={handleLike}>❤️</button>
    </div>
  );
}

export default PostItem;
