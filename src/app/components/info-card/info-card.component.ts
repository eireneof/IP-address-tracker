import { Component, Input } from '@angular/core';
import { IPAddressInfos } from 'src/app/models/ipaddress-infos';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {

  @Input() IPInfos: IPAddressInfos = {
    ipAdress: '000.000.000.000',
    location: 'Brooklyn, NY 10001',
    timeZone: 'UTC -05:00',
    isp: 'SpaceX StarLink'
}

}
