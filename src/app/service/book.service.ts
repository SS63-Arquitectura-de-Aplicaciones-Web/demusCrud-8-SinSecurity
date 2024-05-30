import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';
const base_url = enviroment.base
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = `${base_url}` //OJO
  private listaCambio = new Subject<Book[]>()


  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Book[]>(this.url+"/books");
  }
  insert(book: Book) {
    return this.http.post(this.url+"/book", book);
  }
  setList(listaNueva: Book[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

}
