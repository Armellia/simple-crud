import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from 'src/app/books';
import { BooksService } from 'src/app/services/books.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  books!:Books
  constructor(
    private activatedRoute:ActivatedRoute, private booksService:BooksService,private location:Location) { }

  ngOnInit(): void {
    
    this.getData()
  }
  getData():void{
    const id=parseInt(this.activatedRoute.snapshot.paramMap.get('id')!)
    this.booksService.getId(id).subscribe(
      (param)=>{this.books=param}
    )
  }
}
