let nums = []
function findAllNums(num) {
  //const text = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  if (num >= 10) {
    if (num / 10 > 10) {
      findAllNums(Math.floor(num / 10));
    } else {
      nums.push(Math.floor(num / 10));
    }
    nums.push(num % 10);
  }  else {
    nums.push(num);
  }
}

function text(){
  const text = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let a = [];

  for(let i = 0; i < arguments.length; i++){
      nums = [];
      findAllNums(arguments[i]);
      a[i] = nums.map(el => text[el]).join(",");
  }

  return a;
}

console.log(text(95, 1, 92, 2));