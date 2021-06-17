function StopWatch() {
  console.log("timer ready")

  // declare variables
  let running, timerStart, timerStop, duration = 0;

  // start time
  this.start = function() {
    if (running) {
      throw Error('Timer already started.');
    }
    running = true;
    timerStart = new Date();
  }

  // stop time
  this.stop = function() {
    if (!running) {
      throw Error("Timer has not started yet.")
    }
    running = false;
    timerStop = new Date();
    // calculate duration
    duration = ((timerStop.getTime() - timerStart.getTime()) / 1000 )
  }

  // get duration
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration
    }
  })

  // reset time
  this.reset = function() {
    running = false;
    timerStart = null;
    timerEnd = null;
    duration = 0;
  }
}