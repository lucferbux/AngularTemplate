import { Component, OnInit } from '@angular/core';
import { ClientRequestService } from 'src/app/services/client-request.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoadingService } from 'src/app/services/loading.service';
import { Book } from 'src/app/model/models';


@Component({
  selector: 'app-bookshelf-dashboard',
  templateUrl: './bookshelf-dashboard.component.html',
  styleUrls: ['./bookshelf-dashboard.component.scss']
})
export class BookshelfDashboardComponent{

  loading = false;
  searching = false;
  books: Array<Book>;


  constructor(private requestService: ClientRequestService, public snackBar: MatSnackBar, private loadingService: LoadingService) { 

    this.requestService.getResults().subscribe(
      (request: Array<Book>) => {
        this.books = request;
        this.loadingService.setLoading(false);
      }
    )

    this.getAllBooks();

  }
  
  getAllBooks() {
    this.requestService.getAllBooks();
  }


}
