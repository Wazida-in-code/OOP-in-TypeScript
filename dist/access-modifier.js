"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Bkash-account
class Bkash {
    phone;
    pin;
    balance;
    history = [];
    constructor(phone, pin, balance) {
        this.phone = phone;
        this.pin = pin;
        this.balance = balance;
    }
    showBalance(pin) {
        if (this.pin === pin) {
            return this.balance;
        }
        return "Pin is worng!";
    }
}
const bkashAcc1 = new Bkash("01650916747", 29229, 4500);
console.log(bkashAcc1.showBalance(29229));
//# sourceMappingURL=access-modifier.js.map