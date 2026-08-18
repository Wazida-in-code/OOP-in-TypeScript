"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    _name;
    _color;
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }
    sound() {
        console.log("Animal can make sound!");
    }
}
class Cat extends Animal {
    sound() {
        console.log("Mew.. Mew..");
    }
}
class Tiger extends Animal {
    sound() {
        console.log("Ggrrr... Gggrrrr....");
    }
}
const tiger = new Tiger("Kitty", "Light-Blue");
tiger.sound();
// const cat = new Cat("Kitty", "Light-Blue")
// cat.sound()
//# sourceMappingURL=polymorphism.js.map