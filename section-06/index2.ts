type chaiOrder = {
    type: string
    sugar: number
}

// the arguments passed can be of type any but the function will always return chaiOrder type
function isChaiOrder(obj: any): obj is chaiOrder{
    return( 
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: chaiOrder | string){
    if(isChaiOrder(item)){
        return `serving ${item.type} chai with ${item.sugar} sugar`
    }

    return `serving custom chia: ${item}`
}


type MasalaChai = {type: "masala"; spicelevel: number};
type GingerChai = {type: "ginger"; amount: number};
type ElaichiChai = {type: "elaichi"; aroma: number};


type chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: chai){
    switch (order.type) {
        case "elaichi":
            
            break;
    
        case "ginger":
            
            break;
    
        case "masala":
            
            break;

    }
}


function brew(order: MasalaChai | GingerChai){
    // spice level is only in masala chai so order. gives only suggestion of proprties is masala chai(this type narrowing)

    // in checks if property exists in an object
    if("spicelevel" in order) console.log(`This is ${order.type}`)

    
    else console.log(`This is ${order.type}`)
}


function isStringArray(arr: unknown): arr is string[]{

}

// UNKNOWN - The any type is the most-capable type in TypeScript – while it encompasses the type of every possible value, it doesn’t force us to do any checking before we try to call, construct, or access properties on these values. It also lets us assign values of type any to values that expect any other type.