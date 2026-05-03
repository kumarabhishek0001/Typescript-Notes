// guards rails -> using typeof, instace of
// unknown type

function getChai(kind: string | number){
    // type narrowing
    if(typeof kind === "number"){
        return `making ${kind} chai....`
    }
    return `chai order: ${kind}`
}

// msg? -> msg my be passed or may not be passed (msg i now optional)
function serveChai(msg?: string){
    if(msg){
        return `serving ${msg}`
    }

    return `serving default masala chai`
}



function orderChai(size: 'small' | 'medium' | 'large' | number){
    if(size === 'small') return `small cutting chai...`;

    if(size === 'medium' || size === 'large'){
        return `make extra chai`
    }

    return `chai order #${size}`
}

// same method inside class
class kulhadChai{
    serve(){
        return `serving kulhad chai`
    }
}

class cutting{
    serve(){
        return `serving cutting chai`
    }
}


function serve(chai: kulhadChai | cutting){
    if(chai instanceof kulhadChai) return chai.serve();
    return chai.serve();
}