import { Injectable } from '@angular/core';
import { Author } from '../model/author';
import { Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';
const base_url = enviroment.base

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url = `${base_url}` //OJOx
  private listaCambio = new Subject<Author[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get<Author[]> (this.url + "/authors");
  }
  listId(id:number){
    return this.http.get<Author>(this.url+"/author/"+id);
  }
  insert(author:Author){
    return this.http.post(this.url+ '/author', author);
  }
  update(aut: Author){
    return this.http.put(this.url + "/author", aut);
  }
  delete(id:string){
    return this.http.delete(this.url + "/author/" + id);
  }
  setList(listaNueva : Author[]){
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList(){
    return this.listaCambio.asObservable();
  }

}
