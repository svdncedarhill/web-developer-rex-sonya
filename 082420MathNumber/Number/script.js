let p = 25;
let q = 25.3;
let r = Number(25);
let s = new Number(25);
let t = 25n;
let u = BigInt(25);

console.log(`${p}, ${q}, ${r}, ${s}, ${t}`)
console.log(`${typeof(p)}, ${typeof(q)},${typeof(r)},${typeof(s)},${typeof(t)},${typeof(u)},`)

console.log(`----Number Systems ----`)
let n = 12;
console.log(n);

n = 012;
console.log(n);

n = 0x12;
console.log(n)

n = 0b11;
console.log(n);

console.log(0123);

console.log(`-------------------------`);
let n = 255
console.log(n.toString(2));
console.log(n.toString(8));
console.lof(n.toString(16));