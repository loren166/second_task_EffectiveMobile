import { Controller, Post, Body, Res, HttpCode } from '@nestjs/common';
import { Response } from "express";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {HttpStatus} from "@nestjs/common";

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Post('fix-problems')
    @HttpCode(200)
    async fixUsersProblems(): Promise<{fixedCount: number}> {
        const fixedCount = await this.usersService.fixProblems()
        return {fixedCount}
    }

    @Post('')
    async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response): Promise<void> {
        try {
            const newUser = await this.usersService.userCreate(createUserDto)
            res.status(HttpStatus.CREATED).json(newUser)
        } catch (err) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Failed to create user', error: err.message})
        }
    }
}
