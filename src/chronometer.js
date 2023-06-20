class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval (() => {
      this.currentTime += 1;
      if (printTimeCallback){
        printTimeCallback();
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
      valueString = '0' + valueString;
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
