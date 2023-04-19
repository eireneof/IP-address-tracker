export class As {
    asn: string = '';
    name: string = '';
    route: string = '';
    domain: string = '';
    type: string = '';

    constructor(init?:Partial<As>) {
        Object.assign(this, init);
    }
}
