import { Author } from "./author";
export class Book{
    id:number
    nameBook: string
    publicationDateBook:Date = new Date(Date.now())
    numberPages:number
    author: Author
}