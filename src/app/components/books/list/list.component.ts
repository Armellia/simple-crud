import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from 'src/app/books';
import { BooksService } from 'src/app/services/books.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books:Books[]=[]
  search?: string;
  constructor(private bookService:BooksService, private router:Router) { }

  ngOnInit(): void {
    this.getAllBooks()
  }
  getAllBooks():void{
    this.bookService.list().subscribe(books=>this.books=books)
  }
  pushBooks(id:number){
    this.books=this.books.filter(f=>f.id != id)
  }
}
