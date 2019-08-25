import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';
import { UnAuthGuard } from './services/guards/unauth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [UnAuthGuard],
    loadChildren: () => import('./components/container/landing/landing.module').then(module => module.LandingModule)
  },
  {
    path: 'main',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/container/main/main.module').then(module => module.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard, UnAuthGuard
  ]
})
export class AppRoutingModule { }
