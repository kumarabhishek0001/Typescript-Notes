// type assertion
let response: any = "42";


let numericLength: number = (response as string).length
// I know that numericLength will store a number
// now response.length is valid but it does not give suggestion
// Since i am sure that the response is now or in future will be a string i assert response will be a string.
// After assertion all the methods of data are now available

type book = {
    name: string;
    author: string;
}

// JSON string (this is how data is stored/transferred)
let bookString = "{\n\"name\": \"who moved my cheese\",\n\"author\": \"spencer johnason\"}"

// Convert JSON string → JavaScript object
// TypeScript treats result as 'any' by default
let parsedData = JSON.parse(bookString)

// Type assertion:
// We are telling TypeScript to treat parsedData as type 'book'
// NOTE: This does NOT check or convert the data at runtime
let bookObject = parsedData as book

// Accessing properties (TypeScript now allows this because of assertion)
console.log(bookObject.author)
console.log(bookObject.name)


const inputElement = document.getElementById("username") as HTMLInputElement