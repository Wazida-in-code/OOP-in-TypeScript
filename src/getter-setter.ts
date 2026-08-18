class User {
    private _name: string
    private _age: number
    private _email: string
    private _password: number


    constructor(name:string, age:number, email:string, password:number){
        this._name = name
        this._age = age
        this._email = email
        this._password = password
    }

    get age(){
        return this._age
    }

    set age(value:number){
        if (value < 0 || value > 100){
            throw new Error("Error: Please Enter a Valid Age!")
        }
        this._age = value
    }
}

const user1 = new User("Esha", 18, "wazida@gmail.com", 1111)
user1.age = 19 //for setter
console.log(user1);
console.log(user1.age);  //for getter