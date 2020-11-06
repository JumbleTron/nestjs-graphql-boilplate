import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { join } from 'path';
import { AppService } from './app.service';
import { AuthorsService } from './author.service';
import { AuthorsResolver } from './authors.resolver';
import { PostsService } from './post.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [],
  providers: [AppService, AuthorsResolver, PostsService, AuthorsService],
})
export class AppModule {}
