import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BookEntity{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    author:string;

    @Column()
    summary:string;

    @Column()
    isbn:string;

    @Column()
    url:string;


}