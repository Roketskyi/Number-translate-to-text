function text(){
  const text = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const aNum = [];

	for(let i = 0; i < arguments.length; i++){
      aNum[i] = arguments[i];
			if (aNum[i] > 9){
				array = ("" + aNum[i]).split("").map(Number)
        delete aNum[i];

			}
  }

  Array.prototype.push.apply(aNum, array)

  for(let i = 1; i < arguments.length; i++){
      aNum[i] = text[arguments[i]];
  }

  console.log(aNum)
}

text(11, 3, 9, 2);
