const args = process.argv.slice(2); //get the command line arguments (if any)

if(args.length > 0) {
  for (const time of args) {
    if(!isNaN(time) && time >= 0) {
      setTimeout(() => {
        process.stdout.write('.');
      }, time*1000);  
    }
  }
}