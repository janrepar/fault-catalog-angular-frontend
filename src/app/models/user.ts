export class User {
    id: number = 0;
    username: string = "";
    password: string = "";
    passwordHash: number = 0;
    passwordSalt: number = 0;
    refreshToken: string = "";
    tokenCreated: Date = new Date;
    tokenExpires: Date = new Date;
}