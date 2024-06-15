import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(
       @InjectRepository(User)
       private usersRepository: Repository<User>
    ) {}

    async userCreate(userData: CreateUserDto): Promise<User> {
        try {
            const newUser = User.fromDto(userData)
            return await this.usersRepository.save(newUser)
        } catch (err) {
            throw new Error('Failed to create user')
        }
    }

    async fixProblems(): Promise<number> {
        const usersWithProblems = await this.usersRepository.find({
            where: {problems: true}
        })

        const count = usersWithProblems.length

        for (const user of usersWithProblems) {
            user.problems = false
            await this.usersRepository.save(user)
        }
        return count
    }
}
