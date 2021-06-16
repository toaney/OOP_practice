console.log('hello world');



// define constructor function for stopwatch
function Stopwatch() {

  // define default time
  let startTime, endTime, running, duration = 0;

  // start
  this.start = function() {
    // validation check
    if (running) {
      throw new Error('Stopwatch has already started.');
    }
    // timer start
    running = true;
    startTime = new Date();
    // console.log("timer started");
  }

  // stop
  this.stop = function() {
    // validation check
    if (!running) {
      throw new Error('Stopwatch is not started.');
    }
    // timer stop
    running = false;
    endTime = new Date();
    // console.log("timer stopped");

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
    // console.log(duration);
  }

  // reset
  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
    // console.log("timer reset")
  }

  // get duration
  Object.defineProperty(this, "duration", {
    get: function(){
      return duration;
    }
  })

}