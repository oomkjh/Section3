import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { AuthorEntity } from '../models/author.entity';
import { Author } from '../models/author.interface';

@Injectable()
export class AuthorService {

    constructor(
        @InjectRepository(AuthorEntity) private readonly authorRepository: Repository<AuthorEntity>
    ) { }

    create(author: Author): Observable<Author> {
        return from(this.authorRepository.save(author));
    }

    findOne(id: number): Observable<Author> {
        return from(this.authorRepository.findOne({ id }));
    }

    findAll(): Observable<Author[]> {
        return from(this.authorRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.authorRepository.delete(id))
    }

    updateOne(id: number, author: Author): Observable<any> {
        return from(this.authorRepository.update(id, author));
    }
}
