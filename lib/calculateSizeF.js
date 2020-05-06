//require node modules

const calculateSizeF = stats => {
    const filesizeBytes = stats.size; //bytes

    //size in human redable format
const units = "BKMGT";

//........1000........1000000......1000000000..........
//log10
//........3...........6............9........
//log10(filesize)/3
//0........1...........2............3........

const index = Math.floor(Math.log10(filesizeBytes)/3); //it mutches with index of bytes

//700 -> 700/1000^0
//10000 -> 10000/1000 ^1
//10000000 -> 10000/1000^2
const filesizeHuman = (filesizeBytes/Math.pow(1000,index)).toFixed(1); //formula for calculating the right value in human readable format

const unit = units[index];

filesize = `${filesizeHuman}${unit}`;

    return [filesize, filesizeBytes];

};

module.exports = calculateSizeF;