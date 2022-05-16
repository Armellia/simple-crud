import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { Authv2Guard } from './auth/authv2.guard';
import { LoginComponent } from './components/admin/login/login.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { CreateComponent } from './components/books/create/create.component';
import { DetailsComponent } from './components/books/details/details.component';
import { ListComponent } from './components/books/list/list.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  { path: 'book', component: ListComponent, canActivate:[AuthGuard]},
  { path: 'book/:id', component: DetailsComponent, canActivate:[AuthGuard] },
  { path: 'add', component: CreateComponent, canActivate:[AuthGuard] },
  { path: 'edit/:id', component: CreateComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent , canActivate:[Authv2Guard]},
  { path: 'register', component: RegisterComponent, canActivate:[Authv2Guard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
