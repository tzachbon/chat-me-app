import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { UnAuthGuard } from 'src/app/services/guards/unauth.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    canActivate: [UnAuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
      },
      {
        path: 'sign-in',
        loadChildren: () => import('./auth/sign-in/sign-in.module').then(module => module.SignInModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('./auth/sign-up/sign-up.module').then(module => module.SignUpModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LandingRoutingModule { }
