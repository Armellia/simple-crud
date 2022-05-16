import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Books } from 'src/app/books';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() id:number | undefined
  @Output() eventDelete=new EventEmitter<any>()
  constructor(private booksService:BooksService) { }

  ngOnInit(): void {
    
  }
  onDelete(){
    this.booksService.delete(this.id!).subscribe(
      (value)=>this.eventDelete.emit(this.id!)
    )
  }
}
