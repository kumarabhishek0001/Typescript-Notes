let value: any = '15'

value = 1;
value = [1,2,3,4,5,5,6]

value = {
    name: "abhishek",
    branch: "ECE"
}

const result = value.toUpperCase()
// even thought it is not of type string still toUpperCase here does not throw error 
// it will throw error while compilation

let newValue:unknown = "chai";
newValue = [1,2,3,4];

newValue = 2.5;

// we simply cannot
// newValue.toUpperCase()

// we need guard rails here
if(typeof newValue === "string"){
    newValue.toUpperCase();
}