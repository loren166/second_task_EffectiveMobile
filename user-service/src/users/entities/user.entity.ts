import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {CreateUserDto} from "../dto/create-user.dto";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar", length: 255})
    first_name!: string;

    @Column({type: "varchar", length: 255})
    last_name!: string;

    @Column({type: "int"})
    age!: number;

    @Column({type: "varchar", length: 10})
    gender: string

    @Column({type: "boolean", default: false})
    problems!: boolean;

    static fromDto(createUserDto: CreateUserDto): User {
        const user = new User();
        user.first_name = createUserDto.first_name;
        user.last_name = createUserDto.last_name;
        user.age = createUserDto.age;
        user.gender = createUserDto.gender
        user.problems = createUserDto.problems;
        return user;
    }
}