import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps/maps.component';
import { InputComponent } from './input/input.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'



@NgModule({
  declarations: [
    MapsComponent,
    InputComponent,
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    NgxMaskDirective, 
    NgxMaskPipe,
  ],
  exports: [
    MapsComponent,
    InputComponent,
    InfoCardComponent
  ],
  providers: [provideNgxMask()]
})
export class ComponentsModule { }
