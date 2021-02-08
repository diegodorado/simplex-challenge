/* 
You decide to test if your oddly-mathematical heating company is fulfilling its 
All-Time Max, Min, Mean and Mode Temperature Guarantee™.

Write a class TempTracker with these methods:

   insert()—records a new temperature
   getMax()—returns the highest temp we've seen so far
   getMin()—returns the lowest temp we've seen so far
   getMean()—returns the mean of all temps we've seen so far
   getMode()—returns a mode of all temps we've seen so far

Optimize for space and time. Favor speeding up 
*/

class TempTracker {
  min = null
  max = null
  mean = null
  total = 0
  count = 0
  counts = {}
  curr_mode_count = 0
  mode = null

  insert = (t) => {

    // keep min and max updated
    if(this.min === null || this.min > t) this.min = t;
    if(this.max === null || this.max < t) this.max = t;

    // keep track of total and count to easily calculate mean
    this.count++;
    this.total += t;
    this.mean = this.total / this.count;

    // increment the occurrence of current temperature
    if(this.counts[t] > 0){
      this.counts[t]++;
    }else{
      this.counts[t] = 1;
    }

    // check whether we should update the mode
    if(this.counts[t] > this.curr_mode_count){
      this.curr_mode_count = this.counts[t];
      this.mode = t;
    }

  }

  getMin = () => {
    return this.min
  }

  getMax = () => {
    return this.max
  }

  getMean = () => {
    return this.mean
  }

  getMode = () => {
    return this.mode
  }

}

module.exports = TempTracker;
