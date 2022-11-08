let nums = []
let minus = 'minus ';

function findAllNums(num) {
  if (num >= 10) {
    if (num / 10 > 10) {
      findAllNums(Math.floor(num / 10));
    } else {
      nums.push(Math.floor(num / 10));
    }
    nums.push(num % 10);
  } else {
    nums.push(num);
  }
}

function text(){
  const text = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let a = [];

  for(let i = 0; i < arguments.length; i++){
      nums = [];
      findAllNums(arguments[i]);

      if (arguments[i] >= 0){
        a[i] = nums.map(el => text[el]).join(", ");
      } else if (arguments[i] < 0){
        let result = arguments[i]-arguments[i]-arguments[i];
        a[i] = nums.map(el => minus + text[result]).join(", ");
      }
  }

  return a;
}

console.log(text(0, -5, 92));
