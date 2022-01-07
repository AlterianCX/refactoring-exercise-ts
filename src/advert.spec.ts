import 'mocha';
import {Person} from './person';
import {Advert} from './advert';
import {expect} from 'chai';

const lowValueLowRepeatPurchaseCustomer = new Person(1, 'John Smith', 100, 10);
const lowValueMultiplePurchaseCustomer = new Person(2, 'Helena Gerardo', 999, 11);

const mediumValueLowRepeatPurchaseCustomer = new Person(3, 'Ursule Agatka', 1000, 7);
const mediumValueMultiplePurchaseCustomer = new Person(4, 'Adalwin Hadubert', 4999, 8);

const highValueLowRepeatPurchaseCustomer = new Person(5, 'Dileep Xhemal', 5000, 4);
const highValueMultiplePurchaseCustomer = new Person(6, 'Kike Brynhildr', 9999, 5);

const executiveValueLowRepeatPurchaseCustomer = new Person(7, 'Adenike Xquenda', 10000, 2);
const executiveValueMultiplePurchaseCustomer = new Person(8, 'Dinesh Malak', 25000, 3);

describe('Mail offers', () => {
   describe('for low repeat order customers', () => {
      it('should offer 5 percent off for a low value customer', () => {
         const expectedOutcome = [
            { customerId: lowValueLowRepeatPurchaseCustomer.id, contentId: 'low-value-customer-mail-id', percentOffNextPurchase: 0.05 }
         ];
         const advert = new Advert();
         advert.addCustomer(lowValueLowRepeatPurchaseCustomer);
         expect(advert.mail()).to.deep.equal(expectedOutcome);
      });

      it('should offer 7 percent off for a medium value customer', () => {
         const expectedOutcome = [
            { customerId: mediumValueLowRepeatPurchaseCustomer.id, contentId: 'typical-customer-mail-id', percentOffNextPurchase: 0.07 }
         ];
         const advert = new Advert();
         advert.addCustomer(mediumValueLowRepeatPurchaseCustomer);
         expect(advert.mail()).to.deep.equal(expectedOutcome);
      });

      it('should offer 8 percent off for a high value customer', () => {
         const expectedOutcome = [
            { customerId: highValueLowRepeatPurchaseCustomer.id, contentId: 'gold-customer-mail-id', percentOffNextPurchase: 0.08 }
         ];
         const advert = new Advert();
         advert.addCustomer(highValueLowRepeatPurchaseCustomer);
         expect(advert.mail()).to.deep.equal(expectedOutcome);
      });

      it('should offer 10 percent off for a very high value customer', () => {
         const expectedOutcome = [
            { customerId: executiveValueLowRepeatPurchaseCustomer.id, contentId: 'platinum-customer-mail-id', percentOffNextPurchase: 0.10 }
         ];
         const advert = new Advert();
         advert.addCustomer(executiveValueLowRepeatPurchaseCustomer);
         expect(advert.mail()).to.deep.equal(expectedOutcome);
      });
   });

   describe('for high repeat order customers', () => {
      it('should offer 15 percent off for a low value customer', () => {
         const expectedOutcome = [
            { customerId: lowValueMultiplePurchaseCustomer.id, contentId: 'low-value-customer-mail-id', percentOffNextPurchase: 0.15 }
         ];
         const advert = new Advert();
         advert.addCustomer(lowValueMultiplePurchaseCustomer);
         expect(advert.mail()).to.deep.equal(expectedOutcome);
      });

      it('should offer 17.5 percent off for a medium value customer', () => {
         const expectedOutcome = [
            { customerId: mediumValueMultiplePurchaseCustomer.id, contentId: 'typical-customer-mail-id', percentOffNextPurchase: 0.175 }
         ];
         const advert = new Advert();
         advert.addCustomer(mediumValueMultiplePurchaseCustomer);
         expect(advert.mail()).to.deep.equal(expectedOutcome);
      });

      it('should offer 20 percent off for a high value customer', () => {
         const expectedOutcome = [
            { customerId: highValueMultiplePurchaseCustomer.id, contentId: 'gold-customer-mail-id', percentOffNextPurchase: 0.2 }
         ];
         const advert = new Advert();
         advert.addCustomer(highValueMultiplePurchaseCustomer);
         expect(advert.mail()).to.deep.equal(expectedOutcome);
      });

      it('should offer 25 percent off for a very high value customer', () => {
         const expectedOutcome = [
            { customerId: executiveValueMultiplePurchaseCustomer.id, contentId: 'platinum-customer-mail-id', percentOffNextPurchase: 0.25 }
         ];
         const advert = new Advert();
         advert.addCustomer(executiveValueMultiplePurchaseCustomer);
         expect(advert.mail()).to.deep.equal(expectedOutcome);
      });
   });

   it('should have 5 offers for each of the customers', () => {
      const expectedOutcome = [
         { customerId: lowValueLowRepeatPurchaseCustomer.id, contentId: 'low-value-customer-mail-id', percentOffNextPurchase: 0.05 },
         { customerId: executiveValueLowRepeatPurchaseCustomer.id, contentId: 'platinum-customer-mail-id', percentOffNextPurchase: 0.10 },
         { customerId: highValueMultiplePurchaseCustomer.id, contentId: 'gold-customer-mail-id', percentOffNextPurchase: 0.2 },
         { customerId: mediumValueLowRepeatPurchaseCustomer.id, contentId: 'typical-customer-mail-id', percentOffNextPurchase: 0.07 },
         { customerId: lowValueMultiplePurchaseCustomer.id, contentId: 'low-value-customer-mail-id', percentOffNextPurchase: 0.15 }

      ];
      const advert = new Advert();
      advert.addCustomer(lowValueLowRepeatPurchaseCustomer);
      advert.addCustomer(executiveValueLowRepeatPurchaseCustomer);
      advert.addCustomer(highValueMultiplePurchaseCustomer);
      advert.addCustomer(mediumValueLowRepeatPurchaseCustomer);
      advert.addCustomer(lowValueMultiplePurchaseCustomer);
      expect(advert.mail()).to.deep.equal(expectedOutcome);
   });
});

describe('Html offers', () => {
   describe('for low repeat order customers', () => {
      it('should offer 25 percent off for a low value customer', () => {
         const expectedOutcome = [
            { customerId: lowValueLowRepeatPurchaseCustomer.id, contentId: 'low-value-customer-banner', percentOffNextPurchase: 0.25 }
         ];
         const advert = new Advert();
         advert.addCustomer(lowValueLowRepeatPurchaseCustomer);
         expect(advert.htmlBanner()).to.deep.equal(expectedOutcome);
      });

      it('should offer 20 percent off for a medium value customer', () => {
         const expectedOutcome = [
            { customerId: mediumValueLowRepeatPurchaseCustomer.id, contentId: 'typical-customer-banner', percentOffNextPurchase: 0.2 }
         ];
         const advert = new Advert();
         advert.addCustomer(mediumValueLowRepeatPurchaseCustomer);
         expect(advert.htmlBanner()).to.deep.equal(expectedOutcome);
      });

      it('should offer 15 percent off for a high value customer', () => {
         const expectedOutcome = [
            { customerId: highValueLowRepeatPurchaseCustomer.id, contentId: 'gold-customer-banner', percentOffNextPurchase: 0.15 }
         ];
         const advert = new Advert();
         advert.addCustomer(highValueLowRepeatPurchaseCustomer);
         expect(advert.htmlBanner()).to.deep.equal(expectedOutcome);
      });

      it('should offer 10 percent off for a very high value customer', () => {
         const expectedOutcome = [
            { customerId: executiveValueLowRepeatPurchaseCustomer.id, contentId: 'platinum-customer-banner', percentOffNextPurchase: 0.10 }
         ];
         const advert = new Advert();
         advert.addCustomer(executiveValueLowRepeatPurchaseCustomer);
         expect(advert.htmlBanner()).to.deep.equal(expectedOutcome);
      });
   });

   describe('for high repeat order customers', () => {
      it('should offer 10 percent off for a low value customer', () => {
         const expectedOutcome = [
            { customerId: lowValueMultiplePurchaseCustomer.id, contentId: 'low-value-customer-banner', percentOffNextPurchase: 0.1 }
         ];
         const advert = new Advert();
         advert.addCustomer(lowValueMultiplePurchaseCustomer);
         expect(advert.htmlBanner()).to.deep.equal(expectedOutcome);
      });

      it('should offer 12 percent off for a medium value customer', () => {
         const expectedOutcome = [
            { customerId: mediumValueMultiplePurchaseCustomer.id, contentId: 'typical-customer-banner', percentOffNextPurchase: 0.12 }
         ];
         const advert = new Advert();
         advert.addCustomer(mediumValueMultiplePurchaseCustomer);
         expect(advert.htmlBanner()).to.deep.equal(expectedOutcome);
      });

      it('should offer 14 percent off for a high value customer', () => {
         const expectedOutcome = [
            { customerId: highValueMultiplePurchaseCustomer.id, contentId: 'gold-customer-banner', percentOffNextPurchase: 0.14 }
         ];
         const advert = new Advert();
         advert.addCustomer(highValueMultiplePurchaseCustomer);
         expect(advert.htmlBanner()).to.deep.equal(expectedOutcome);
      });

      it('should offer 16 percent off for a very high value customer', () => {
         const expectedOutcome = [
            { customerId: executiveValueMultiplePurchaseCustomer.id, contentId: 'platinum-customer-banner', percentOffNextPurchase: 0.16 }
         ];
         const advert = new Advert();
         advert.addCustomer(executiveValueMultiplePurchaseCustomer);
         expect(advert.htmlBanner()).to.deep.equal(expectedOutcome);
      });
   });

   it('should have 5 offers for each of the customers', () => {
      const expectedOutcome = [
         { customerId: lowValueLowRepeatPurchaseCustomer.id, contentId: 'low-value-customer-banner', percentOffNextPurchase: 0.25 },
         { customerId: executiveValueLowRepeatPurchaseCustomer.id, contentId: 'platinum-customer-banner', percentOffNextPurchase: 0.10 },
         { customerId: highValueMultiplePurchaseCustomer.id, contentId: 'gold-customer-banner', percentOffNextPurchase: 0.14 },
         { customerId: mediumValueLowRepeatPurchaseCustomer.id, contentId: 'typical-customer-banner', percentOffNextPurchase: 0.2 },
         { customerId: lowValueMultiplePurchaseCustomer.id, contentId: 'low-value-customer-banner', percentOffNextPurchase: 0.1 }

      ];
      const advert = new Advert();
      advert.addCustomer(lowValueLowRepeatPurchaseCustomer);
      advert.addCustomer(executiveValueLowRepeatPurchaseCustomer);
      advert.addCustomer(highValueMultiplePurchaseCustomer);
      advert.addCustomer(mediumValueLowRepeatPurchaseCustomer);
      advert.addCustomer(lowValueMultiplePurchaseCustomer);
      expect(advert.htmlBanner()).to.deep.equal(expectedOutcome);
   });
});
