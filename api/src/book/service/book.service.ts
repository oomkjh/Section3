import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { BookEntity } from '../models/book.entity';
import { Book } from '../models/book.interface';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity) private readonly bookRespository: Repository<BookEntity>
    ) { }

    create(book: Book): Observable<Book> {
        return from(this.bookRespository.save(book));
    }

    findOne(id: number): Observable<Book> {
        return from(this.bookRespository.findOne({ id }));
    }

    findAll(): Observable<Book[]> {
        return from(this.bookRespository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.bookRespository.delete(id))
    }

    updateOne(id: number, book: Book): Observable<any> {
        return from(this.bookRespository.update(id, book));
    }
}
