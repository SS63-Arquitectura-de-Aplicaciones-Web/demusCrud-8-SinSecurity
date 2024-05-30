import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorComponent } from './component/author/author.component';
import { AuthorListarComponent } from './component/author/author-listar/author-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';//add
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';//add
import { MatSortModule } from '@angular/material/sort'; //add
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule} from '@angular/material/core'; //falto
import { CreateEditComponent } from './component/author/create-edit/create-edit.component'
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { DialogoComponent } from './component/author/author-listar/dialogo/dialogo.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BookComponent } from './component/book/book.component';
import { BookListarComponent } from './component/book/book-listar/book-listar.component';
import { CreateEditBookComponent } from './component/book/create-edit-book/create-edit-book.component';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list'
@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorListarComponent,
    CreateEditComponent,
    NavbarComponent,
    DialogoComponent,
    BookComponent,
    BookListarComponent,
    CreateEditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule, //falto adicionar
    MatToolbarModule,
    MatDialogModule,
    MatMomentDateModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
