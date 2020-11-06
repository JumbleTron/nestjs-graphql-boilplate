import { Injectable } from '@nestjs/common';
import { Author } from './author.model';
import { Post } from './post.model';

@Injectable()
export class PostsService {
    public findAll(author: Author) {
        const post = new Post();
        post.id = 1;
        post.title = "Some title";
        post.votes = 4;

        return post;
    }
}