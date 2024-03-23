import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const PostsSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
});

export const CreatePostSchema = PostsSchema.omit({ id: true });

export type Post = z.infer<typeof PostsSchema>;

export const postsContract = c.router({
  getPosts: {
    method: 'GET',
    path: '/posts',
    responses: {
      200: z.array(PostsSchema),
    },
    summary: 'Get all posts',
    strictStatusCodes: true,
  },
  getPost: {
    method: 'GET',
    path: '/posts/:id',
    responses: {
      200: PostsSchema,
      404: z.object({
        message: z.string(),
      }),
    },
    summary: 'Get a post by ID',
    strictStatusCodes: true,
  },
  createPost: {
    method: 'POST',
    path: '/posts',
    body: CreatePostSchema,
    responses: {
      201: PostsSchema,
    },
    summary: 'Create a post',
  },
});
