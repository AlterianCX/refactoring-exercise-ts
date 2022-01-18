import {Person} from "./person";
import {Offer} from './offer';

export class Advert {
    private _customers: Person[];
    private _offers: Offer[];

    constructor() {
        this._offers = [
            new Offer('low-value-customer', 'low-value-customer-banner', 'low-value-customer-mail-id'),
            new Offer('typical-customer', 'typical-customer-banner', 'typical-customer-mail-id'),
            new Offer('gold-customer', 'gold-customer-banner', 'gold-customer-mail-id'),
            new Offer('platinum-customer', 'platinum-customer-banner', 'platinum-customer-mail-id'),
        ]
    }

    public addCustomer(person: Person) {
        if (!this._customers) {
            this._customers = [ person ];
        } else {
            this._customers.push(person);
        }
    }

    public mail(): any {
        var mailInstructions = [];

        for (var i = 0; i < this._customers.length; i++) {
            if (this._customers[i].purchaseHistory < Person.OneThousand) {
                if (this._customers[i].numberOfOrders > 10) {
                    mailInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[0]._mailContentId,
                        percentOffNextPurchase: 0.15
                    });
                } else {
                    mailInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[0]._mailContentId,
                        percentOffNextPurchase: 0.05
                    });
                }
            } else if (this._customers[i].purchaseHistory < Person.FiveThousand) {
                if (this._customers[i].numberOfOrders > 7) {
                    mailInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[1]._mailContentId,
                        percentOffNextPurchase: 0.175
                    });
                } else {
                    mailInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[1]._mailContentId,
                        percentOffNextPurchase: 0.07
                    });
                }
            } else if (this._customers[i].purchaseHistory < Person.TenThousand) {
                if (this._customers[i].numberOfOrders > 4) {
                    mailInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[2]._mailContentId,
                        percentOffNextPurchase: 0.20
                    });
                } else {
                    mailInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[2]._mailContentId,
                        percentOffNextPurchase: 0.08
                    });
                }
            } else {
                if (this._customers[i].numberOfOrders > 2) {
                    mailInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[3]._mailContentId,
                        percentOffNextPurchase: 0.25
                    });
                } else {
                    mailInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[3]._mailContentId,
                        percentOffNextPurchase: 0.10
                    });
                }
            }
        }

        return mailInstructions;
    }

    public htmlBanner(): any {
        var htmlInstructions = [];
        var amountToDiscountMap = new Map<number, number[]>([
            [ Person.OneThousand, [ 0.25, .10 ] ],
            [ Person.FiveThousand, [ .2, .12 ] ],
            [ Person.TenThousand, [ .15, .14 ] ],
            [ -1, [ .1, .16 ] ],
        ]);

        for (var i = 0; i < this._customers.length; i++) {
            if (this._customers[i].purchaseHistory < Person.OneThousand) {
                if (this._customers[i].numberOfOrders > 10) {
                    htmlInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[0].htmlCONTENTID,
                        percentOffNextPurchase: amountToDiscountMap.get(Person.OneThousand)[1]
                    });
                } else {
                    htmlInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[0].htmlCONTENTID,
                        percentOffNextPurchase: amountToDiscountMap.get(Person.OneThousand)[0]
                    });
                }
            } else if (this._customers[i].purchaseHistory < Person.FiveThousand) {
                if (this._customers[i].numberOfOrders > 7) {
                    htmlInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[1].htmlCONTENTID,
                        percentOffNextPurchase: amountToDiscountMap.get(Person.FiveThousand)[1]
                    });
                } else {
                    htmlInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[1].htmlCONTENTID,
                        percentOffNextPurchase: amountToDiscountMap.get(Person.FiveThousand)[0]
                    });
                }
            } else if (this._customers[i].purchaseHistory < Person.TenThousand) {
                if (this._customers[i].numberOfOrders > 4) {
                    htmlInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[2].htmlCONTENTID,
                        percentOffNextPurchase: amountToDiscountMap.get(Person.TenThousand)[1]
                    });
                } else {
                    htmlInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[2].htmlCONTENTID,
                        percentOffNextPurchase: amountToDiscountMap.get(Person.TenThousand)[0]
                    });
                }
            } else {
                if (this._customers[i].numberOfOrders > 2) {
                    htmlInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[3].htmlCONTENTID,
                        percentOffNextPurchase: amountToDiscountMap.get(-1)[1]
                    });
                } else {
                    htmlInstructions.push({
                        customerId: this._customers[i].id,
                        contentId: this._offers[3].htmlCONTENTID,
                        percentOffNextPurchase: amountToDiscountMap.get(-1)[0]
                    });
                }
            }
        }

        return htmlInstructions;
    }
}
