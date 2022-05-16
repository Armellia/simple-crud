import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/books/create/create.component';
import { DetailsComponent } from './components/books/details/details.component';
import { ListComponent } from './components/books/list/list.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'book'},
  { path: 'book', component: ListComponent},
  { path: 'book/:id', component: DetailsComponent},
  { path: 'add', component: CreateComponent},
  { path: 'edit/:id', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
