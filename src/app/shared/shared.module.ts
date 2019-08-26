import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDynamicFormCreatorModule } from 'ngx-dynamic-form-creator';
import { HttpClientModule } from '@angular/common/http';
import { LinesComponent } from './ui/lines/lines.component';
import { PolygonsComponent } from './ui/polygons/polygons.component';
import { PolygonLoaderComponent } from './ui/polygon-loader/polygon-loader.component';
import { UploadImageComponent } from './ui/upload-image/upload-image.component';

@NgModule({
  declarations: [LinesComponent, PolygonsComponent, PolygonLoaderComponent, UploadImageComponent],
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
    LinesComponent,
    PolygonsComponent,
    PolygonLoaderComponent,
    UploadImageComponent
  ]
})
export class SharedModule { }
