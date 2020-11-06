import { Args, Int, Query, Resolver } from "@nestjs/graphql";
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

  /*@ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }*/
}