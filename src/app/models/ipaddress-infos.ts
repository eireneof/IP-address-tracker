export class IPAddressInfos {
    ipAdress: string = '';
    location: string = '';
    timeZone: string = '';
    isp: string = '';


    constructor(init?:Partial<IPAddressInfos>) {
        Object.assign(this, init);
    }
    
}
