export class Formation {
    id: number
    name: string
    school: string
    start: Date
    end: Date


    constructor() {
        this.name = '';
        this.school = '';
        this.start = new Date();
        this.end = new Date();
    }
}
