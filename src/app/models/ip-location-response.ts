import { As } from "./as";

export class IpLocationResponse {
    ip: string = '';
    location: Location = new Location();
    domains: string[] = [];
    as: As = new As();
    isp: string = '';

}
