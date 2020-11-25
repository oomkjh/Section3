import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Author } from '../models/author.interface';
import { AuthorService } from '../service/author.service';

@Controller('authors')
export class AuthorController {

    constructor(private authorService: AuthorService) { }


    @Post()
    create(@Body() author: Author): Observable<Author> {
        return this.authorService.create(author)
    }

    @Get(':id')
    findOne(@Param() params): Observable<Author> {
        return this.authorService.findOne(params.id);
    }

    @Get()
    findAll(): Observable<Author[]> {
        return this.authorService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): Observable<Author> {
        return this.authorService.deleteOne(Number(id));
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() author: Author): Observable<any> {
        return this.authorService.updateOne(Number(id), author);
    }

}
