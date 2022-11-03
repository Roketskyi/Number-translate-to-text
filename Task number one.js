function text(){
  const text = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const a = [];

  for(let i = 0; i < arguments.length; i++){
      a[i] = text[arguments[i]];
  }
  return a;
}

console.log(text(3, 1, 9, 2));
