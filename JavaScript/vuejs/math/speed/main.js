const a = 3;
const b = 5;

console.log(a - b);

function calc(x1, y1, x2, y2) {
  let a = x2 - x1;
  let b = y2 - y1;

  return Math.sqrt(a * a + b * b);
}

const d = calc(1, 2, 5, 8);

console.log(d);

const e = Math.floor(d);
console.log(e);

const f = Math.sqrt(16);
console.log(f);



function (x1, y1, x2, y2) {

  let a, b, tmp;
  let sum = 0;
  let duration = this.customer.end_at - this.customer.start_at;
  let rate = this.field.cm2px;

  for (let i = 0; i + 1 < this.customer.node_locations.length; i++) {
    a = x2 - x1;
    b = y2 - y1;
    tmp = Math.sqrt(a*a + b*b);
    sum += tmp;
  }
  let length = sum / cm2px;
  let speed = Math.floor(length / duration);
  return speed;
}

