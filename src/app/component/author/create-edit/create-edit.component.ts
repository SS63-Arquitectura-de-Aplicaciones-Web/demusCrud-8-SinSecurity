import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/model/author';
import * as moment from 'moment';
import { AuthorService } from 'src/app/service/author.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  author: Author = new Author();
  mensaje: string = '';
  maxFecha: Date = moment().add(1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private authorService: AuthorService,
    private router: Router,
    private route : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>
    {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null;//true, false
      this.init();
     });

    this.form = new FormGroup({
      id: new FormControl(),
      nameAuthor: new FormControl('', [Validators.required]),
      emailAuthor: new FormControl('',[Validators.required,Validators.email]),
      birthDateAuthor: new FormControl()
    })
  }

  init() {
    if (this.edicion) {
    this.authorService.listId(this.id).subscribe((data) => {
     this.form = new FormGroup({
     id: new FormControl(data.id),
    nameAuthor: new FormControl(data.nameAuthor),
    emailAuthor: new FormControl(data.emailAuthor),
    birthDateAuthor: new FormControl(data.birthDateAuthor),
     });
     });
    } //del if
    } // del in

  aceptar(){
    this.author.id = this.form.value['id'];
    this.author.nameAuthor = this.form.value['nameAuthor'];
    this.author.emailAuthor = this.form.value['emailAuthor'];
    this.author.birthDateAuthor = this.form.value['birthDateAuthor'];
    if(this.form.valid){
      if (this.edicion){
        console.log(this.author);//se ve en la herramienta de desarrollador de Chrome
      this.authorService.update(this.author).subscribe((data)=>{
        this.authorService.list().subscribe(data => {
          this.authorService.setList(data);//enviando la lista al suscriptor
        })
      });
      }else {
      console.log(this.author);//se ve en la herramienta de desarrollador de Chrome
      this.authorService.insert(this.author).subscribe((data)=>{
        this.authorService.list().subscribe(data => {
          this.authorService.setList(data);//enviando la lista al suscriptor
        })
      });
    }
      this.router.navigate(['authors']);
    } else{
      this.mensaje="Agregue campos omitidos";
    }
  }


}
