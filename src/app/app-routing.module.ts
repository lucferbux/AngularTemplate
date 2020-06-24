import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookshelfDashboardComponent } from './screens/bookshelf-dashboard/bookshelf-dashboard.component';


const routes: Routes = [
  {path: 'scanner', component: BookshelfDashboardComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'scanner', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  


}
