const args = process.argv.slice(2); //get the command line arguments (if any)

if(args.length > 0) {
  for (const time of args) { //assuming time in seconds
    if(!isNaN(time) && time >= 0) {
      setTimeout(() => {
        process.stdout.write('.'); //'\x07' not used because system beep not working
      }, time*1000);  
    }
  }
}