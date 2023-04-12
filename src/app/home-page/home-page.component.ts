import { Component } from '@angular/core';
import { IpLocationService } from '../services/ip-location-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private _ipLocationService: IpLocationService) {}

  // TODO: fazer um loading

  ngOnInit(): void {
    this.getIPInformation();
  }

  getIPInformation() {
    this._ipLocationService.getGeolocationByIp('189.94.22.160').subscribe({
      next: (response: any) => {
        if (response) {
          console.log(response);
        }
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
