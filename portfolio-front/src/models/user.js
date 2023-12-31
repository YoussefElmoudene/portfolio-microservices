import type {Language} from "./language";
import type {Experience} from "./experience";
import type {Formation} from "./formation";
import type {Skill} from "./skills";

export class User {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    username: string
    languages: Language[]
    experiences: Experience[]
    formations: Formation[]
    skillsList: Skill[]
    role: string
    title: string
}
