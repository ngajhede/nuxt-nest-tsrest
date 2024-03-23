import { Injectable } from '@nestjs/common';
import { Post } from './posts.contract';

@Injectable()
export class PostsService {
  posts: Post[] = [
    { id: '1', title: 'Hello, World!', content: 'This is a test post.' },
    {
      id: '2',
      title: 'Hello, World! 2',
      content: 'This is a test post 2.',
    },
  ];
  async getPosts() {
    return this.posts;
  }

  async getPost(id: string) {
    return this.posts.find((post) => post.id === id);
  }

  async createPost(post: Post) {
    const newPost = {
      id: String(this.posts.length + 1),
      ...post,
    };
    this.posts.push(newPost);
    return newPost;
  }
}
