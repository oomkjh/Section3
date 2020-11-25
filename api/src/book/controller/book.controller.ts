import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Book } from '../models/book.interface';
import { BookService } from '../service/book.service';

@Controller('books')
export class BookController {

    constructor(private bookService: BookService) { }

    @Post()
    create(@Body() book: Book): Observable<Book> {
        return this.bookService.create(book)
    }

    @Get(':id')
    findOne(@Param() params): Observable<Book> {
        return this.bookService.findOne(params.id);
    }

    @Get()
    findAll(): Observable<Book[]> {
        return this.bookService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): Observable<Book> {
        return this.bookService.deleteOne(Number(id));
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() book: Book): Observable<any> {
        return this.bookService.updateOne(Number(id), book);
    }

}

