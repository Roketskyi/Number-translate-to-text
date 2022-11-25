var express = require('express');
const app = require('../app');
var router = express.Router();

router.get('/array', function(req, res, next) {
  const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
  const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
  function numWords (input) {
    const regex = /^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/
  
    const getLT20 = (n) => a[Number(n)]
    const getGT20 = (n) => b[n[0]] + ' ' + a[n[1]]
    const minus = 'minus ';

    const num = Number(input)
    if (isNaN(num)) return 'Not a number'
    if (num === 0) return 'zero'
    if (num === `-`) return 'minus'
  
    const numStr = num.toString()
    if (numStr.length > 9) {
      throw new Error('Error') // не підтримує перетворення більше ніж 9 цифр
    }

    const [, n1, n2, n3, n4, n5] = ('000000000' + numStr).substr(-9).match(regex)

    let str = ''
    
    str += n1 != 0 ? (getLT20(n1) || getGT20(n1)) + 'crore ' : ''
    str += n2 != 0 ? (getLT20(n2) || getGT20(n2)) + 'lakh ' : ''
    str += n3 != 0 ? (getLT20(n3) || getGT20(n3)) + 'thousand ' : ''
    str += n4 != 0 ? getLT20(n4) + 'hundred ' : ''
    str += n5 != 0 && str != '' ? 'and ' : ''
    str += n5 != 0 ? (getLT20(n5) || getGT20(n5)) : ''
    
    return str
  }

  res.send(numWords(152))
});

module.exports = router;
