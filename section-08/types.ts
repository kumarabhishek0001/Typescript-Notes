// function makeChai(order: {type: string; sugar: number; strong: boolean}){
//     console.log(order);
// }

// function serveChai(order: {type: string; sugar: number; strong: boolean}){
//     console.log(order)
// }
// both params have the same signature

type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order: ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order)
}

// ---------------------------------------------------------------------

type TeaRecepie = {
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecepie{

    water = 100;
    milk = 50;
}

// ---------------------------------------------------------------------------------

// this is a customized type
// js won't let implement this
// type CupSize = "small" | "large"

interface CupSize {
    size: "small" | "large"
}

class Chai implements CupSize{
    size: "small" | "large" = 'large';
}