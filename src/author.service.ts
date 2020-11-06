import { Injectable } from '@nestjs/common';
import { Author } from './author.model';
import { Post } from './post.model';

@Injectable()
export class AuthorsService  {
    public findOneById(id: number): Author {
        const post = new Post();
        post.id = 12;
        post.title = "Some title 2";
        post.votes = 42;

        const author = new Author();
        author.firstName = "Marek";
        author.lastName = "Marecki";
        author.id = id;
        author.posts = [post];
        return author;
    }

    public findAll(): Author[] {
        const post = new Post();
        post.id = 12;
        post.title = "Some title 2";
        post.votes = 42;

        const author = new Author();
        author.firstName = "Marek";
        author.lastName = "Marecki";
        author.id = 5;
        author.posts = [post];
        
        return [author];
    }
}