import { atom, selector } from 'recoil';

export const postState = atom({
  key : "post",
  default : []
})

export const totalLikeState = selector({
  key : "totalLikes",
  get : ({get}) => {
    const posts = get(postState);
    return posts.reduce((sum,post) => sum + post.likes,0);
  }
})