import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ], 
  exports: [
    HomePageComponent

  ]
})
export class HomePageModule { }
