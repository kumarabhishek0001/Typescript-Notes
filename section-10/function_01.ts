// functions
function makeChia(type: string, cups: number) {
    console.log(`making ${cups} cups of ${type}`);
}

makeChia("lemon tea", 5)

function getChaiPrice(): number {
    return 25;
}

function makeOrder(order: string) {
    if (!order) return null;
    return order
}

// logger function -> returns nothting
function logChai(): void {
    console.log("chai order is ready")
}

// optional parameters
function orderChai(type?: string) {

}

// default parameters
function orderChai1(type: string = "masala") {

}

// defining datypes within parameters
function createChai(order: {
    type: string,
    sugar: number,
    size: "small" | "large"
}): number {
    return 4
}