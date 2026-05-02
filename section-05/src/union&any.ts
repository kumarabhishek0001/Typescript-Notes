// UNION of data type: number OR string
let subs: number | string = '10M' 

// UNION of string litral types
let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

// apiRequestStatus = 'done'
apiRequestStatus = "success";


let airlineSeat: 'aisle' | 'window' | 'middle' = 'middle';
airlineSeat = 'window';


const orders = ['12', '20', '28', '42'];

// here datatype is any -> ANY: mujhe parvah nahi hai(i don't care what's the data type)
let currentOrder;


let currentOrderCorrect: string | undefined; // you should know what the varible is going to hold

// after for loop runs since currentOrder varialbe was type (any) -> i can assign an interger to it or it can even assign boolean

for(let order of orders){
    if(order === '28'){
        currentOrder = order;
        currentOrderCorrect = order;
        break;
    }
}

currentOrder = false;

console.log(currentOrder)
console.log(currentOrderCorrect)