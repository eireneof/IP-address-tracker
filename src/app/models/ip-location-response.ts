import { As } from "./as";
import { Location } from "./location";

export class IpLocationResponse {
    ip: string = '';
    location: Location = new Location();
    domains: string[] = [];
    as: As = new As();
    isp: string = '';

    constructor(init?:Partial<IpLocationResponse>) {
        Object.assign(this, init);
    }

}
