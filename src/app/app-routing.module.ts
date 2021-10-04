import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { NameSearchComponent } from './components/name-search/name-search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'search/:superhero-search',
  //   component: HomeComponent
  // },
  // {
  //   path: 'details/:id',
  //   component: DetailsComponent 
  // },
  {
    path: 'herosearch/:superhero-search',
    component: NameSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
