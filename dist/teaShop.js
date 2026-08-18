"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class teaShop {
    title;
    soldItem = [];
    constructor(title) {
        this.title = title;
    }
    buy(name, price) {
        this.soldItem.push({ name, price });
    }
    totalSold() {
        const total = this.soldItem.reduce((acc, item) => acc + item.price, 0);
        return total;
    }
}
const shop1 = new teaShop("Tea Shop");
shop1.buy("Tea", 20);
shop1.buy("Cake", 40);
shop1.buy("Chips", 60);
console.log(shop1.totalSold());
//# sourceMappingURL=teaShop.js.map