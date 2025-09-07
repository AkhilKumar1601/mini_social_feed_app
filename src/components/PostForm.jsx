import React from 'react';
import { postState } from './state/postAtom.js';
import { useSetRecoilState } from 'recoil';
import { useState } from 'react';

function PostForm () {

  const setPost = useSetRecoilState(postState);
  const [postContent,setPostContent] = useState('');

  function submitHandler(e) {
     e.preventDefault();

     setPost(prevPosts => [...prevPosts,{id : Date.now(), title:postContent,likes:0}]);

     setPostContent('');
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input 
        value={postContent} 
        placeholder="Add the content for your Post."
        onChange={e => setPostContent(e.target.value)}
        />
        <button type="submit">Add the post</button>
      </form>
    </div>
  )
}

export default PostForm;