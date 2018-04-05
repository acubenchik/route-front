export class User {

    constructor(password: string, name: string) {
        this.password = password;
        this.username = name;
    }

    password: string;
    username: string;
}