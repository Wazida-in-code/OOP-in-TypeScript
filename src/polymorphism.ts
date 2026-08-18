class Animal {
    private _name: string
    private _color: string

    constructor(name: string, color: string){
        this._name = name
        this._color = color
    }

    sound(){
        console.log("Animal can make sound!");
    }
}

class Cat extends Animal{
    sound(): void {
        console.log("Mew.. Mew..");
    }
}

class Tiger extends Animal {
    sound(): void {
        console.log("Ggrrr... Gggrrrr....");
    }
}




// const tiger = new Tiger("Kitty", "Light-Blue")
// tiger.sound()

// const cat = new Cat("Kitty", "Light-Blue")
// cat.sound()