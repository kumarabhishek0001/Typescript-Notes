// UNION

type TeaType = "masala" | "ginger" | "lemon";
// "masala" | "ginger" | "lemon"; -> litral types

function orderChai(t: TeaType){
    console.log(t);
}

// INTERSECTION -> base and extra dono ko mix karunga(dono required hai)
type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai1 = BaseChai & Extra

const cup: MasalaChai1 = {
    teaLeaves: 2,
    masala: 1
}


// optional properties

type user = {
    username: string;
    bio?: string
}

const u1 : user = {
    username: "abhishek"
}

const u2 : user = {
    username : "abhishek",
    bio: "abhishek.ai"
}

// ---------------------------- READONLY -------------------------------
type config = {
    readonly appName: string,
    version: number
}

const cnf: config = {
    appName : "proxylfix",
    version : 1.0
}
// Cannot assign to 'appName' because it is a read-only property
// cnf.appName = "masterJi"

// can assign as this was not read only
cnf.version = 2.0;