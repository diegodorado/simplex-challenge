const TempTracker = require('./temp-tracker')

describe('Empty TempTracker', () => {
  const t = new TempTracker();

  test('min should be null', () => {
    expect(t.getMin()).toBe(null);
  });

  test('max should be null', () => {
    expect(t.getMax()).toBe(null);
  });

  test('mean should be null', () => {
    expect(t.getMean()).toBe(null);
  });

  test('mode should be null', () => {
    expect(t.getMode()).toBe(null);
  });

});

describe('Check output for known values.', () => {

  const t = new TempTracker();
  beforeAll(() => {
    // min 1, max 4, mode 3, mean: 2.75
    const temps = [1,2,2,3,3,3,4,4]
    temps.forEach(v => t.insert(v));
  });

  test('min should be 1', () => {
    expect(t.getMin()).toBe(1);
  });

  test('max should be 4', () => {
    expect(t.getMax()).toBe(4);
  });

  test('mean should be 2.75', () => {
    expect(t.getMean()).toBe(2.75);
  });

  test('mode should be 3', () => {
    expect(t.getMode()).toBe(3);
  });

});

describe('Check output for random values.', () => {

  const t = new TempTracker();
  const temps = []
  beforeAll(() => {
    for(let i =0;i<100;i++){
      temps.push(Math.floor(Math.random()*1000));
    }
    temps.forEach(v => t.insert(v));
  });

  test('getMin() should return the minimum', () => {
    expect(t.getMin()).toBe(Math.min(...temps));
  });

  test('getMax() should return the maximum', () => {
    expect(t.getMax()).toBe(Math.max(...temps));
  });

  test('getMean() should return the mean', () => {
    const total = temps.reduce( (t,e) => e + t , 0)
    const mean = total / temps.length;
    expect(t.getMean()).toBe(mean);
  });

});


