class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {printTimeCallback()}
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime%60
  }

  getCentiseconds() {
    return 0
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value<10){
      value = "0"+value.toString()
    }
    return value.toString();
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":"+this.computeTwoDigitNumber(this.getSeconds())
  }
}