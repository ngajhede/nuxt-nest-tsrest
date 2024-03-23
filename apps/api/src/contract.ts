import { initContract } from '@ts-rest/core';
import { postsContract } from './posts/posts.contract';

const c = initContract();

export const contract = c.router({
  posts: postsContract,
});
