export class User {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    username: string
    languages: any
    experiences: any
    formations: any
    skillsList: any
    role: string
    title: string

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.title = "";
        // Add other properties as needed
    }
}
