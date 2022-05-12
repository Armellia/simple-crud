import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/books';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books:Books[]=[]
  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
    this.getAllBooks()
  }
  getAllBooks():void{
    this.bookService.list().subscribe(books=>this.books=books)
  }

}
