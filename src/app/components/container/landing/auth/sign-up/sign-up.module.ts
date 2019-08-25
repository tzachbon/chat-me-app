import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignUpRoutingModule } from './sign-up.routing';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SharedModule,
    SignUpRoutingModule
  ]
})
export class SignUpModule { }
