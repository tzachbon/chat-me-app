import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDynamicFormCreatorModule } from 'ngx-dynamic-form-creator';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDynamicFormCreatorModule
  ], exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDynamicFormCreatorModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
