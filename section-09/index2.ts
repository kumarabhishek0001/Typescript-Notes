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