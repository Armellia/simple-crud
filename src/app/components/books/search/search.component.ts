import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Books } from 'src/app/books';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnChanges {
  @Input() search:string | undefined
  books: Books[] = [];

  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
    this.getSearcBooks()
  }
  ngOnChanges(): void {
    this.getSearcBooks()
    
  }
  getSearcBooks():void{
    this.bookService.search(this.search!).subscribe(books=>this.books=books)
  }
  pushBooks(id:number){
    this.books=this.books.filter(f=>f.id != id)
  }
}
