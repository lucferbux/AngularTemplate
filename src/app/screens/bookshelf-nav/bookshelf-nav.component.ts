import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadingService } from '../../services/loading.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookshelf-nav',
  templateUrl: './bookshelf-nav.component.html',
  styleUrls: ['./bookshelf-nav.component.scss']
})
export class BookshelfNavComponent {

  isLoading: Boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    iconsActive = [
      {link: "introduction", image: "person", text: "Upload Card"},
      {link: "results", image: "contacts", text: "Results"},
    ]
    
  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private loadingService: LoadingService, public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.loadingService.currentLoading.subscribe((result: Boolean) => {
      this.isLoading = result;
    })
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "Ok", {
      duration: 2000,
    });
  }
}
  
