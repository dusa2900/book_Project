import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  id:any;
  overview:any;
    constructor(private route:ActivatedRoute, private bs:BookService) {
      route.params.subscribe(
        params=>this.id=params['id']);
  
      this.bs.getDetails(this.id).subscribe(
        (data)=>this.overview=data,
        ()=>this.overview={}
          )
        
     }

  ngOnInit(): void {
  }

}
