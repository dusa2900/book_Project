import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
records:any;
  constructor(private bs:BookService) {
    this.bs.getBook().subscribe(
      (data)=>{this.records=data},
      ()=>{this.records=[]}
    )
   }

  ngOnInit(): void {
  }

}
