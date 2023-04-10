import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps/maps.component';



@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapsComponent
  ]
})
export class ComponentsModule { }
