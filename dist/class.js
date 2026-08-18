"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    email;
    marks;
    stage;
    // constructor --> special method
    constructor(name, age, email, marks, stage) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.marks = marks;
        this.stage = stage;
    }
    getInfo() {
        const info = `Name: ${this.name} | Marks: ${this.marks}`;
        return info;
    }
}
const tanha = new Student("Tanha", 18, "tanha@gmail.com", 99, "First"); //instantiate
console.log(tanha.getInfo());
const esha = new Student("Esha", 18, "Wazida@gmail.com", 99, "Second");
console.log(esha.getInfo());
//# sourceMappingURL=class.js.map