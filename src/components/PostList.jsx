import React from 'react';
import { useRecoilValue } from 'recoil';
import { postState } from './state/postAtom';
import PostItem from './PostItem.jsx';
import { totalLikeState } from "./state/postAtom";

function PostList () {

  const posts = useRecoilValue(postState);

  const totalLikes = useRecoilValue(totalLikeState);

  return (
    <div>
       <h3>Total Likes ❤️ {totalLikes}</h3>
       <ul>
        { posts.map(post => <PostItem key={post.id} id={post.id}/>) }
       </ul>
    </div>
  )
}

export default PostList;