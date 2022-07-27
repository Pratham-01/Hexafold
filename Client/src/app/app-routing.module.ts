import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects/:project_id', component: ProjectPageComponent },
  

  // { path: 'signin', component: SignInComponent },
  // { path: 'signup', component: SignUpComponent },
  // {
  //   path: 'dashboard', component: DashboardComponent,
  //   loadChildren: () => import('./home/dashboard/dashboard.module').then(m => m.DashboardModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    onSameUrlNavigation: 'reload',
    paramsInheritanceStrategy: 'always',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
