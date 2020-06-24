import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Subject } from 'rxjs'
import { ROOT_URL } from '../url'
import { Book } from '../model/books';
//import { response } from './example-data';

@Injectable({
  providedIn: 'root'
})
export class ClientRequestService {


  private results = new Subject<Array<Book>>();

  constructor(private http: HttpClient) {

  }

  getResults() {
    return this.results.asObservable();
  }

  insertBook(body: Book) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTg0MjIxMjMsIm5iZiI6MTU1ODQyMjEyMywianRpIjoiZTE2ZmFjYzQtZGU4OS00NWY1LWI3MjQtM2YxODM4NjQxZGUwIiwiaWRlbnRpdHkiOiJrX21pdG5pYyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.BPXKILXs0vDGRRe5svcxlAGJUFMI_gCgX4Y2Xh2B_h0'
      })
    }

    this.http.post<any>(ROOT_URL + '/api/insert', body, httpOptions).subscribe(
      (response: any) => {}
    )
  }

  getAllBooks() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTg0MjIxMjMsIm5iZiI6MTU1ODQyMjEyMywianRpIjoiZTE2ZmFjYzQtZGU4OS00NWY1LWI3MjQtM2YxODM4NjQxZGUwIiwiaWRlbnRpdHkiOiJrX21pdG5pYyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.BPXKILXs0vDGRRe5svcxlAGJUFMI_gCgX4Y2Xh2B_h0'
      })
    }

    this.http.get<Response>(ROOT_URL + '/api/bookshelf', httpOptions).subscribe(
      (response: Response) => {
        try {
          const books: Array<Book> = response["200"];
          this.results.next(books);
        } catch (error) {
          console.log("error in the request")
        }        
      }
    )
  }


}
