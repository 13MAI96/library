import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from 'src/app/components/carrousel/carrousel.component';
import { ImagenComponent } from 'src/app/components/carrousel/imagen/imagen.component';
import { CarrouselRoutingModule } from './carrousel-routing.module';

//Se importan en modulo raiz de la aplicacion
//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CarrouselComponent,
    ImagenComponent
  ],
  imports: [
    //BrowserModule,
    //BrowserAnimationsModule,
    CommonModule,
    CarrouselRoutingModule
  ]
})
export class CarrouselModule { }
