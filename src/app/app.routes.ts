import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FundamentalsComponent } from './pages/fundamentals/fundamentals.component';
import { DirectivesComponent } from './pages/directives/directives.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fundamentals', component: FundamentalsComponent},
  { path: 'directives', component: DirectivesComponent},
];
