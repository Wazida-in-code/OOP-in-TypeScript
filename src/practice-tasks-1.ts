// 001
type Student = {
  name: string;
  roll: number;
  batch: string;
  marks: number;
  present: boolean;
};


const rafi:Student = {
    name: "Rafi",
    roll: 27,
    batch: "B14",
    marks: 78,
    present: true
}

//31, "B14", 91, true.
const sadia:Student = {
    name: "Sadia",
    roll: 31,
    batch: "B14",
    marks: 91,
    present: true
}

const Students = [rafi, sadia]

const rafiResult = `${rafi.name} (${rafi.roll}) scored ${rafi.marks}`;
// console.log(rafiResult);


// 002
type Rickshaw = {
    plate: string,
    driver: string,
    rent: number
}

// — "R-101", , 180 — and r102 — "R-102", , 200. Both typed Rickshaw.

const r101: Rickshaw = {
    plate: "R-101",
    driver: "Kamal",
    rent: 180
}
const r102: Rickshaw = {
    plate: "R-10",
    driver: "Jashim",
    rent: 200
}

function describe(r){
    return `R-101 ${r101.driver}`
}

function weeklyRent(r:Rickshaw){
    return r.rent * 7
}

function transfer(r:Rickshaw, newDriver:string){
    r.driver = newDriver
}

function cheaper(a:Rickshaw, b:Rickshaw){
    if (a > b){
        return a.plate
    }
    else if (a === b){
        return a.plate
    }
    else b.plate
}