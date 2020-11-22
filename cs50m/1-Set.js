class Set {
  constructor(arr) {
    this.arr = arr;
  }

  add(val) {
    if (!this.has(val)) this.arr.push(val);
  }

  delete(val) {
    this.arr = this.arr.filter(x => x !== val);
  }

  has(val) {
    return this.arr.includes(val);
  }

  get size() {
    return this.arr.length;
  } 
}

let s = new Set([1, 2, 3, 4, 5]);

// Trying to add the same value shouldn't work.
s.add(1);
s.add(1);
s.add(1);

console.log('s should have 5 members and actually has:', s.size);
console.log('s should contain 5:', s.has(5));

s.add(6);

console.log('s should contain 6:', s.has(6));

s.delete(6);

console.log('s should not contain 6:', !s.has(6));

