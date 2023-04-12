import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ComponentsModule } from '../components/components.module';
import { IpLocationService } from '../services/ip-location-service.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule
  ], 
  exports: [
    HomePageComponent
  ],
  providers: [
    IpLocationService,
  ]
})
export class HomePageModule { }
