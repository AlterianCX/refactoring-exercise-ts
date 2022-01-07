export class Offer {
    public id: string;
    public htmlContentID: string;
    public mailContentId: string;

    constructor(id: string, h: string, m: string) {
        this.id = id;
        this.htmlContentID = h;
        this.mailContentId = m;
    }
}
