import { AuthComponent } from './auth/auth.component';
import { FavorisComponent } from './favoris/favoris.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{

    path: 'search/film-search',
    component: HomeComponent

  },
  {

    path: 'details/:id',
    component: DetailsComponent

  },

  {

    path: 'favoris',
    component: FavorisComponent

  },

  {

    path: 'signUp',
    component: AuthComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
