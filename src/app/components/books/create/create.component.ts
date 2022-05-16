import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Books } from 'src/app/books';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  isAdd!: boolean;
  book?:Books=new Books()
  id!: number;
  constructor(private booksService:BooksService, private router:Router, private ActivatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.id=this.ActivatedRoute.snapshot.params['id'];
    this.isAdd=!this.id
    if(!this.isAdd){
      this.booksService.getId(this.id).subscribe((param)=>{
        this.book=param
      })
    }
  }
  onSubmit(forms:NgForm){
    if (!this.isAdd) {
      console.log(forms.value)
      this.booksService.update(this.id,forms.value).subscribe(()=>this.router.navigate(['']))
    }
    else{
      this.booksService.add(forms.value).subscribe(()=>this.router.navigate(['']))
    }

  }
}
