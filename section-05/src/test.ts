const orderList = ['12', '24', '19', '33'];

let currentOrder;

for(let order in orderList){
    if(order === '19'){
        currentOrder = order;
        break;
    }
}
// IN THE CASE OF ANY TS RELAXES THE CHECK It allows undefined usage.
console.log(currentOrder);

// ------------------
// const orderList2 = ['12', '15', '19', '20'];

// let currentOrder2: string;

// for(let order of orderList2){
//     if(order === '19'){
//         currentOrder2 = order;
//         break;
//     }
// }

// console.log(currentOrder2)