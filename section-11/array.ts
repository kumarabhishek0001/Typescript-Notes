const chaiFlavours: string[] = ["masala", "ginger"];
const chaiPrice: number[] = [12, 20];

// array containing number -> same as above different way to declare
const rating: Array<number> = [4.5, 5.0];

// array of objects
type Chai = {
    name: string,
    price: number
}

const menu: Chai[] = [
    {
        name: "masala",
        price: 20
    },
    {
        name: "ginger",
        price: 25
    }
]

menu.push({
    name: "chamomile",
    price: 55
})


// read-only array
const cities: readonly string[] = ["delhi", "jaipur"];
// Property 'push' does not exist on type 'readonly string[]
// cities.push("pune")


const table: number[][] = [
    [1,2,3],
    [4,5,6]
]