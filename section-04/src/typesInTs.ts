// examples of type inferencing->
let drink = 'coffee';

let cups = Math.random() > 0.5 ? 10 : 5;

let channelName = "chai-aur-code";

// example of type annotations-> explicitly mention the data types
// COMMON TYPES
// number, string, boolean
let chaiFlavour: string = "masala chai";
chaiFlavour = "ginger tea";

// cannot change the type of variable
// ERROR: Type 'number' is not assignable to type 'string'
// chaiFlavour = 21;

let chaiOrder: number = 21;
let chaiGood: boolean = true;