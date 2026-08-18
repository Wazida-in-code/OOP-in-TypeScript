class teaShop {
    title: string
    soldItem: any = []

    constructor(title:string){
        this.title = title
    }

    buy(name:string, price: number){
        this.soldItem.push({name, price})
    }
    totalSold(){
        const total = this.soldItem.reduce((acc, item) => acc+item.price, 0)
        return total
    }

}

const shop1 = new teaShop("Tea Shop")
shop1.buy("Tea", 20)
shop1.buy("Cake", 40)
shop1.buy("Chips", 60)
console.log(shop1.totalSold());