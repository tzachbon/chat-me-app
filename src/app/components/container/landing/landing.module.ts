import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingRoutingModule } from './landing.routing';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
