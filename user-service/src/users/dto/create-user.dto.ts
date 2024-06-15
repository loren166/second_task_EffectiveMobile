export class CreateUserDto {
    first_name!: string;
    last_name!: string;
    age!: number;
    gender!: string;
    problems!: boolean;

    constructor(firstName: string, lastName: string, age: number, gender: string, problems: boolean) {
        this.first_name = firstName;
        this.last_name = lastName;
        this.age = age;
        this.gender = gender
        this.problems = problems;
    }
}