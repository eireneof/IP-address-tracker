export class Location {
    country: string = '';
    region: string = '';
    timezone: string = '';

    constructor(init?:Partial<Location>) {
        Object.assign(this, init);
    }
}
