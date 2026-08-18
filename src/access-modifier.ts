// Bkash-account
class Bkash {
    public phone: string
    private pin: number
    private balance: number
    protected history: any = []

    constructor(phone:string, pin:number, balance:number){
        this.phone = phone
        this.pin = pin
        this.balance = balance
    }

    showBalance(pin:number){
        if (this.pin === pin){
            return this.balance
        }
        return "Pin is worng!"
    }
}

const bkashAcc1 = new Bkash("01650916747", 29229, 4500)

console.log(bkashAcc1.showBalance(29229));