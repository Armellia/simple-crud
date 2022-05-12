import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private booksService:BooksService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(booksForm:NgForm){
    this.booksService.add(booksForm.value).subscribe(
      ()=>this.router.navigate(['']))
  }
}
