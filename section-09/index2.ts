type User = {
    username: string;
    password: string;
}

// u needs both username and password
const u: User = {
    username: "hitesh123",
    password: "123"
}


// ---------------------------------

type Item = {name: string, quantity: number};
type Address = {street: string, pin: number};

type Order = {
    id: string,
    items: Item[],
    address: Address
}

// --------------Pick, partial, required-------------------

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with", updates)
}
// we want to give value partially
updateChai({price: 25})

// can also pass empty function - can cause problems
updateChai({isHot: false})


// ------------------------- REQUIRED --------------------------
type ChaiOrder = {
    name?: string;
    qunatity?: number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placeOrder({
    name: "masala chai",
    qunatity: 2
})

// ------------------------ Pick ---------------------------

type chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "lemon tea",
    price: 30
}

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string
}

type PublicChai = Omit<ChaiNew, "secretIngredients">