import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EntrepotsComponent } from './components/Entrepots/entrepots/entrepots.component';
import { CreateEntrepotsComponent } from './components/Entrepots/create-entrepots/create-entrepots.component';
import { ShowEntrepotsComponent } from './components/Entrepots/show-entrepots/show-entrepots.component';
import { AuthGuard } from './shared/guards/auth.guard';

 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'entrepots', component: EntrepotsComponent, canActivate: [AuthGuard] },
  { path: 'create-entrepots', component: CreateEntrepotsComponent, canActivate: [AuthGuard] },
  { path: 'show-entrepots', component: ShowEntrepotsComponent, canActivate: [AuthGuard] },

  // {
  //   path: 'detail/:id',
  //   component: DetailComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
