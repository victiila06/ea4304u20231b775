import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {HomeComponent} from './public/pages/home/home.component';
import {TripRatingComponent} from './loyalty/pages/trip-rating/trip-rating.component';

export const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  { path: 'loyalty/ratings/new',            component: TripRatingComponent },
  { path: '',                 redirectTo:     '/home', pathMatch: 'full' },
  { path: '**',               component: PageNotFoundComponent },
];
