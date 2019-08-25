import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main.component';
import { AuthGuard } from 'src/app/services/guards/auth.guard';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule
  ], providers: [
    AuthGuard
  ]
})
export class MainModule { }
