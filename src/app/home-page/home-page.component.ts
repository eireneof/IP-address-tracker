import { Component, ViewChild } from '@angular/core';
import { IpLocationService } from '../services/ip-location-service.service';
import { IpLocationResponse } from '../models/ip-location-response';
import { IPAddressInfos } from '../models/ipaddress-infos';
import { LoadingModalComponent } from '../components/loading-modal/loading-modal.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {

  @ViewChild('loadingModal', { static: false })
  loadingModal: LoadingModalComponent;
  
  ipResponse: IpLocationResponse = new IpLocationResponse();
  IPInfos: IPAddressInfos = {
    ipAdress: '---------------',
    location: '---------------',
    timeZone: '---------------',
    isp: '---------------'
  }

  constructor(private _ipLocationService: IpLocationService) {}

  ngOnInit(): void {

  }

  // 189.94.22.160
  searchIPInfos(ip: string) {
    this.openLoadingModal();
    this._ipLocationService.getGeolocationByIp(ip).subscribe({
      next: (response: any) => {
        if (response) {
          this.ipResponse = response;
          this.populateFieldsIPInfos(response);
          this.closeLoadingModal();
        }
      },
      error: (error: any) => {
        // TODO: fazer tratativa de erro
        this.closeLoadingModal();
        console.log(error);
      },
    });
  }

  populateFieldsIPInfos(response: IpLocationResponse) {
    this.IPInfos.location = response.location.country + ' ' + response.location.region;
    this.IPInfos.timeZone = response.location.timezone;
    this.IPInfos.isp = response.isp;
    this.IPInfos.ipAdress = response.ip;
  }

  openLoadingModal() {
    this.loadingModal.open();
  }

  closeLoadingModal() {
    this.loadingModal.close();
  }
}
