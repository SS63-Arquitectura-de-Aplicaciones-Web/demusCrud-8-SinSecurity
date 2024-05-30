import { Component, OnInit, ViewChild } from '@angular/core';
import { Author } from 'src/app/model/author';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort';
import { AuthorService } from 'src/app/service/author.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogoComponent } from './dialogo/dialogo.component';



@Component({
  selector: 'app-author-listar',
  templateUrl: './author-listar.component.html',
  styleUrls: ['./author-listar.component.css']
})
export class AuthorListarComponent implements OnInit {
   lista:Author[] = [];
   displayedColumns = ['id', 'nameAuthor', 'emailAuthor', 'birthDateAuthor','accion01','accion02'];
   dataSource = new MatTableDataSource<Author>();
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
   constructor(private authorService: AuthorService, 
               private router: Router,
               private dialog:MatDialog){
     console.log("Load Constructor");
   }
  ngOnInit(): void {
    this.authorService.list().subscribe(data => this.dataSource.data = data);
    //me suscribo
    this.authorService.getList().subscribe(data => {
      this.dataSource.data = data;
    });
  }
  openDialog(id:string){
    const dialogRef = this.dialog.open(DialogoComponent);
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.delete(id);
      }else{
        console.log("FALSE");
      }
    });
  }
  delete(id:string){
    this.authorService.delete(id).subscribe(()=>{
      this.authorService.list().subscribe(data=>{
        this.authorService.setList(data);
      })
    });
  }
  ngAfterViewInit() {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
  }
  filtrar(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}
