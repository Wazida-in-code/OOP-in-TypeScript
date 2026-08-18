"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rafi = {
    name: "Rafi",
    roll: 27,
    batch: "B14",
    marks: 78,
    present: true
};
//31, "B14", 91, true.
const sadia = {
    name: "Sadia",
    roll: 31,
    batch: "B14",
    marks: 91,
    present: true
};
const Students = [rafi, sadia];
const rafiResult = `${rafi.name} (${rafi.roll}) scored ${rafi.marks}`;
// — "R-101", , 180 — and r102 — "R-102", , 200. Both typed Rickshaw.
const r101 = {
    plate: "R-101",
    driver: "Kamal",
    rent: 180
};
const r102 = {
    plate: "R-10",
    driver: "Jashim",
    rent: 200
};
function describe(r) {
    return `R-101 ${r101.driver}`;
}
function weeklyRent(r) {
    return r.rent * 7;
}
function transfer(r, newDriver) {
    r.driver = newDriver;
}
function cheaper(a, b) {
    if (a > b) {
        return a.plate;
    }
    else if (a === b) {
        return a.plate;
    }
    else
        b.plate;
}
//# sourceMappingURL=practice-tasks-1.js.map