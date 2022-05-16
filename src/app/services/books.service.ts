import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Books } from '../books';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  bearer_code=sessionStorage.getItem('token')
  apiUrl="http://localhost:3000/660/books"
  httpOption={
    headers:new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${this.bearer_code}`})
  }
  
  constructor(private httclient:HttpClient) { }
  list(): Observable<Books[]>{
    return this.httclient.get<Books[]>(this.apiUrl,this.httpOption)
  }
  add(books:Books):Observable<Books[]>{
    return this.httclient.post<Books[]>(this.apiUrl,books,this.httpOption)
  }
  getId(id:number):Observable<Books>{
    return this.httclient.get<Books>(`${this.apiUrl}/${id}`,this.httpOption)
  }
  update(id:number, books:Books):Observable<Books>{
    return this.httclient.put(`${this.apiUrl}/${id}`,books,this.httpOption)
  }
  delete(id:number):Observable<Books>{
    return this.httclient.delete(`${this.apiUrl}/${id}`,this.httpOption)
  }
  search(title:string):Observable<Books[]>{
    return this.httclient.get<Books[]>(`${this.apiUrl}?title_like=${title}`,this.httpOption)
  }
}
