import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps/maps.component';
import { InputComponent } from './input/input.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';



@NgModule({
  declarations: [
    MapsComponent,
    InputComponent,
    InfoCardComponent,
    LoadingModalComponent
  ],
  imports: [
    CommonModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MapsComponent,
    InputComponent,
    InfoCardComponent,
    LoadingModalComponent

  ],
  providers: [provideNgxMask()]
})
export class ComponentsModule { }
