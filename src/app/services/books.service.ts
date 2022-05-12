import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Books } from '../books';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiUrl="http://localhost:3000/books"
  httpOption={
    headers:new HttpHeaders({'Content-Type': 'application/json'})
  }
  
  constructor(private httclient:HttpClient) { }
  list(): Observable<Books[]>{
    return this.httclient.get<Books[]>(this.apiUrl)
  }
  add(books:Books):Observable<Books[]>{
    return this.httclient.post<Books[]>(this.apiUrl,books,this.httpOption)
  }
  handleError<T>(result?: T) {
    return (error:any):Observable<T>=>{
      return of(result as T)
    }
  };
}
