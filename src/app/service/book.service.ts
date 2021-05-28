import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBook():Observable<object>
  {
    return this.http.get("http://localhost:9090/book");
  }
  getDetails(id:number):Observable<object>
  {
    return this.http.get("http://localhost:9090/overview/"+id)
  }
}
