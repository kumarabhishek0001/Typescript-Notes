try{

}catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log('ERROR: ', error)
}


const data: unknown = "chiaAurCode";
const strData: string = data as string
