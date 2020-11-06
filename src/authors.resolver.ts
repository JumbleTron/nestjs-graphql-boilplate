import { UseInterceptors } from "@nestjs/common";
import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { RateLimit, RateLimiterInterceptor } from "nestjs-rate-limiter";
import { Author } from "./author.model";
import { AuthorsService } from "./author.service";
import { PostsService } from "./post.service";

@Resolver(of => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query(returns => Author)
  async author(@Args('id', { type: () => Int }) id: number): Promise<Author> {
    return this.authorsService.findOneById(id);
  }

  @Query(returns => [Author])
  @UseInterceptors(RateLimiterInterceptor)
  async authors(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  /*@ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }*/
}