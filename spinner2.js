let spinnerChars = ['\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    '];
let time = 100;
setTimeout(() => {
  for (let i = 0; i < spinnerChars.length; i++) {
    setTimeout(() => {
      process.stdout.write(spinnerChars[i]);
    }, time);

    time += 200;
  }
}, 100);

setTimeout(() => {
  process.stdout.write('\n');
}, 100 + (spinnerChars.length * 200));