class Student {
    name:string  
    age:number  
    email:string 
    marks:number
    stage: string

    // constructor --> special method
    constructor(name:string, age:number, email: string, marks: number, stage: string){
        this.name = name
        this.age = age
        this.email = email
        this.marks = marks
        this.stage = stage
    }

    getInfo():string {
        const info = `Name: ${this.name} | Marks: ${this.marks}`
        return info
    }
        
}

const tanha = new Student("Tanha", 18, "tanha@gmail.com", 99, "First") //instantiate
console.log(tanha.getInfo());
const esha = new Student("Esha", 18, "Wazida@gmail.com", 99, "Second")
console.log(esha.getInfo());