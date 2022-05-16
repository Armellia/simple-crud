import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user?:User
  apiUrl:string="http://localhost:3000"
  bearer_code=sessionStorage.getItem('token')
  isLogged:boolean=false
  httpOption={
    headers:new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${this.bearer_code}`})
  }
  
  constructor(private httpclient:HttpClient) { }
  login(user:User):Observable<any>{
    return this.httpclient.post<any>(`${this.apiUrl}/login`,user)
  }
  register(user:User):Observable<any>{
    return this.httpclient.post<any>(`${this.apiUrl}/register`,user)
  }
  logged():boolean{
    this.isLogged=!this.isLogged
    return this.isLogged
  }
}
