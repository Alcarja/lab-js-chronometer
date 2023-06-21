
class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {  //The printTimeCallback function prints your function into the watch screen. You can check it in the index.js file. What it does is making sure that if someone calls the function 'prinTimeCallBack' has to exist. If it doesn't exist, if they don't pass a value for it, the function doesn't work. You can't use something in a function that hasn't been passed. It protects the function from future bugs.
    this.intervalId = setInterval (() => {
      this.currentTime += 1;
      if (printTimeCallback){ //If printTimeCallBack exists
        printTimeCallback(); //Then we invoke it
      } else {
        return 0;
      }
    }, 1000)
  }

  getMinutes() {
    let entireMinutes = Math.floor(this.currentTime / 60);
    return entireMinutes;
  }

  getSeconds() {
    let totalSeconds = this.currentTime % 60
    return totalSeconds; // Returns the reminder after dividing by 60. After getting the minutes (dividing by 60) it returns the seconds left. The remainder (%) operator returns the remainder left over when one operand is divided by a second operand.
  }

  computeTwoDigitNumber(value) {
    let valueString = String(value);
    if(valueString.length <= 1) {
      valueString = '0' + valueString; //If you add a number to a string the number is converted into a string automatically.
      return valueString;
    } else {return valueString};
  } //We convert everything into a string with 'String(value)'. If the string is smaller than 2 digits we add a 0 in front. If it is 2 digits we simply return it.

  // return ('0' + value).slice(-2); 

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let stringEntireMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let stringTotalSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${stringEntireMinutes}:${stringTotalSeconds}`;
  }
}




/* BOILER TEMPLATE
class Chronometer {
  constructor() {
  }

  start(printTimeCallback) {
  }

  getMinutes() {
  }

  getSeconds() { 

  }

  computeTwoDigitNumber(value) {
  } 

  stop() { }

  reset() {
  }

  split() {
  }
}
*/