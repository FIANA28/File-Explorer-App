console.log(Math.log(1000));
console.log(Math.log(10000));

const filesize = 10000; //bytes
const units = "BKMGT";

//........1000........1000000......1000000000..........
//log10
//........3...........6............9........
//log10(filesize)/3
//0........1...........2............3........

const index = Math.floor(Math.log10(filesize)/3); //it mutches with index of bytes

//700 -> 700/1000^0
//10000 -> 10000/1000 ^1
//10000000 -> 10000/1000^2
const filesizeHuman = (filesize/Math.pow(1000,index)).toFixed(1); //formula for calculating the right value in human readable format

console.log(`${filesizeHuman}${units[index]}`);