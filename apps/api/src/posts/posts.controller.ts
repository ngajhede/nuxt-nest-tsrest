import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { postsContract } from './posts.contract';
import { Controller } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller()
export class PostsController {
  constructor(private readonly service: PostsService) {}

  @TsRestHandler(postsContract.getPost)
  async getPost() {
    return tsRestHandler(postsContract.getPost, async ({ params }) => {
      const post = await this.service.getPost(params.id);

      if (!post) {
        return {
          status: 404,
          body: {
            message: 'Post not found',
          },
        };
      }

      return { status: 200, body: post };
    });
  }

  @TsRestHandler(postsContract.getPosts)
  async getPosts() {
    return tsRestHandler(postsContract.getPosts, async () => {
      const posts = await this.service.getPosts();

      return { status: 200, body: posts };
    });
  }

  @TsRestHandler(postsContract.createPost)
  async createPost() {
    return tsRestHandler(postsContract.createPost, async ({ body }) => {
      const post = await this.service.createPost(body);

      return { status: 201, body: post };
    });
  }
}
