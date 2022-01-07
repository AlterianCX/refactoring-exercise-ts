export class Person {
    static OneThousand = 1000;
    static FiveThousand = 5000;
    static TenThousand = 10000;

    public id: number;
    public name: string;
    public purchaseHistory: number;
    public numberOfOrders: number;

    constructor(id: number, name: string, purhaseHistory: number, orderQuantity: number) {
        this.id = id;
        this.name = name;
        this.purchaseHistory = purhaseHistory;
        this.numberOfOrders = orderQuantity;
    }
}
