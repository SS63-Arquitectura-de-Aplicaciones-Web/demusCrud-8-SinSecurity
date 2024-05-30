import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './component/author/author.component';
import { CreateEditComponent } from './component/author/create-edit/create-edit.component';
import { AuthorListarComponent } from './component/author/author-listar/author-listar.component';
import { BookComponent } from './component/book/book.component';
import { BookListarComponent } from './component/book/book-listar/book-listar.component';
import { CreateEditBookComponent } from './component/book/create-edit-book/create-edit-book.component';

const routes: Routes = [
  {
     path:'authors', component: AuthorComponent, children:[
      {
        path:'nuevo', component: CreateEditComponent
      },
      {
        path: 'listar', component: AuthorListarComponent
      },
      {
        path: 'edicion/:id', component:CreateEditComponent
      }
     ]
 },
 {
  path:'books', component: BookComponent, children:[
    {
    path: 'listar', component:BookListarComponent
    },
    {
      path : 'nuevo', component:CreateEditBookComponent
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
