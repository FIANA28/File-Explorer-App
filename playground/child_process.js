const execSync = require('child_process').execSync;

try{
    const result = execSync('du -sh "/Users/annajussi/Desktop/Project-file-Explorer"').toString();
    console.log(result);
}catch(err){
    console.log(`Error: ${err}`);
}