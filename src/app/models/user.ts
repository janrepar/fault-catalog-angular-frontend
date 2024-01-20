export class User {
    id: number = 0;
    username: string = "";
    passwordHash: number = 0;
    passwordSalt: number = 0;
    refreshToke: string = "";
    tokenCreated: Date = new Date;
    tokenExpires: Date = new Date;
}