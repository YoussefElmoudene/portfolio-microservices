export class Experience {
    id: number
    name: string
    company: string
    start: Date
    end: Date

    constructor() {
        this.name = '';
        this.company = '';
        this.start = new Date();
        this.end = new Date();
    }
}
