import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class AuthorEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    family_name: string;

    @Column()
    date_of_birth: Date;

    @Column()
    date_of_death: Date;

    @Column()
    name: string;

    @Column()
    lifespan: string;

    @Column()
    url: string;

}

