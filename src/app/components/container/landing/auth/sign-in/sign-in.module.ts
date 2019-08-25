import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignInRoutingModule } from './sign-in.routing';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SharedModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
