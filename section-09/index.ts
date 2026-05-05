const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
}

// ts delcares the type itself of object properites 
// this is called type inference

// DECLARING OBJECT TYPES ---------------------------------
let tea: {
    name: string,
    price: number,
    isHot: boolean
}

tea = {
    name: "Ginger tea",
    price: 25,
    isHot: true
}

// ALIAS OBJECT
type Tea = {
    name: string,
    price: number,
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "Adrak chai",
    price: 25,
    ingredients : ["ginger", "tea leaves", "sugar", "milk", "water"]
}


// DUCK TYPING ------------------------------

type Cup = {size: string};
let smallCup: Cup = {size: "200ml"};


let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup
console.log(smallCup)
// even though small cup was of type cup -> with only size property TS does not have any problem even if we add another proprty to it



type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"};
const chaiBrew: Brew = coffee