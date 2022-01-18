export class Offer {
    public id: string;
    public htmlCONTENTID: string;
    private _mailContentId: string;

    constructor(id: string, h: string, m: string) {
        this.id = id;
        this.htmlCONTENTID = h;
        this._mailContentId = m;
    }

    get mailContentId() {
        return this._mailContentId;
    }
}
