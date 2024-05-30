
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Author } from 'src/app/model/author';
import { Book } from 'src/app/model/book';
import { AuthorService } from 'src/app/service/author.service';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-create-edit-book',
  templateUrl: './create-edit-book.component.html',
  styleUrls: ['./create-edit-book.component.css']
})
export class CreateEditBookComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  book: Book = new Book()
  mensaje: string = ""
  maxFecha: Date = moment().add(-1, 'days').toDate();
  lista: Author[] = [];
  public idAuthorSeleccionado: number = 0;


  constructor(private bS: BookService,
    private router: Router,
    private route: ActivatedRoute, private aS:AuthorService) {
  }
  ngOnInit(): void {
    this.aS.list().subscribe(data => { this.lista = data });

    this.form = new FormGroup({
      id: new FormControl(),
      nameBook: new FormControl(),
      publicationDateBook: new FormControl(),
      numberPages: new FormControl(),//OJO
      author :new FormControl()
    });

  }
  aceptar(): void {
    this.book.id = this.form.value['id'];
    this.book.nameBook = this.form.value['nameBook'];
    this.book.numberPages = this.form.value['numberPages'];
    this.book.publicationDateBook = this.form.value['publicationDateBook'];
    //this.book.author.nameAuthor=this.form.value['author.nameAuthor'];
    if (this.idAuthorSeleccionado>0) {
      let a = new Author();
      a.id = this.idAuthorSeleccionado;
      console.log(a);
      this.book.author=a;
      console.log(this.book);
      this.bS.insert(this.book).subscribe(() => {
      this.bS.list().subscribe(data => {
            this.bS.setList(data);
          })
        })

      this.router.navigate(['books']);

  }
}
}