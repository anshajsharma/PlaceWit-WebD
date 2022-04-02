
// let vs var

// for(let i=0;i<5;i++)
// {
//     console.log(i);
// }
// console.log(i);

// for(var i=0;i<5;i++)
// {
//     console.log(i)
// }
// console.log(i)

// let i=5; // integer

// i = "webd"; // string

// i = 'webd';

// var j = 5;

// j = 6;

// // const k =5;
// // k = 6;

// console.log(i,j)

// if(5 == "5") console.log("Both are same....")
// else console.log("Both are different....")

// if(5 === "5") console.log("Both are same....")
// else console.log("Both are different....")


// function whichIsGreater(x,y){
//     if(x==y) return "Both are equal!"
//     if(x>y) return x;
//     else return y;
// }

// whichIsSmaller = (x,y) => {
//     if(x==y) return "Both are equal!"
//     if(x<y) return x;
//     else return y;
// }

// console.log(whichIsGreater(5,9));
// console.log(whichIsGreater(9,5));
// console.log(whichIsGreater(9,9));

// console.log(whichIsSmaller(5,9));
// console.log(whichIsSmaller(9,5));
// console.log(whichIsSmaller(9,9));

// Bitwise Operator
// 1010 => 10
// 1110 => 14

// console.log(10|14);
// console.log(10&14);
// console.log(10^14);


// Javascript Objects
// let webD = {
//     zone: "development",
//     impact: "web",
//     leader: "mdnCommunity",
//     frontendFramework: "reactjs",
//     backend: "nodejs"
// }

// // Fetching
// console.log(webD.backend)
// console.log(webD["backend"])

// // assigning
// webD['security'] = "ssl"
// console.log(webD.security)

// // logging
// console.log(webD)

// // deleting
// delete webD['security']

// // reassignment of value
// webD['frontendFramework'] = "angularjs"

// // logging
// console.log(webD)

// String Methods
// let str = "abcdefghijklmnopqrst"
// undefined
// let part = str.slice(7);
// part
// // 'hijklmnopqrst'
// part = str.slice(1,3)
// // 'bc'
// part = str.slice(-5)
// // 'pqrst'

let str = "ab nb mjhh kdjns djklkdjk dflkd"
let a = str.split(' ');
console.log(a);

// sort on the basis of prices
// if price are equal sort on basis of names
let b = [
    {
        name : 'banana',
        price: 12
    },
    {
        name: "apple",
        price: 100
    },
    {
        name: "guava",
        price: 80
    }
]