import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { DashboardComponent } from './components/dashboard/dashboard';
import { Features } from './components/features/features';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'features', component: Features },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
