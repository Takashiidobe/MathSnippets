//show how to spell out a number in english
//roll your own
//support numbers up to one million
//optional: support for inputs other than positive numbers as well

const numberNames = (num = 0) => {
  //returns the amount of digits in the number
  const numLength = num.toString().split('').length;
  //returns the digits of the number split 
  const splitNum = num.toString().split('').map((x) => parseInt(x));

  //general formula to determine a number
  let fullWord = prefix + suffix + endNumber;
  let prefix;
  let suffix;
  let endNumber;

  //to piece together the numbers zero to 10
  const zero = 'zero';
  const one = 'one';
  const two = 'two';
  const three = 'three';
  const four = 'four';
  const five = 'five';
  const six = 'six';
  const seven = 'seven';
  const eight = 'eight';
  const nine = 'nine';
  const ten = 'ten';

  //to piece together the numbers 13-19
  const teen = 'teen';
  const twoPrefix = 'twen';
  const threePrefix = 'thir';
  const fourPrefix = four;
  const fivePrefix = 'fif';
  const sixPrefix = six;
  const sevenPrefix = seven;
  const eightPrefix = eight;
  const ninePrefix = nine;

  //to piece together the numbers from twenty to a hundred

  //numbers from 0 to 9
  if (numLength === 1) {
    if (num === 0) { return `${zero}`; }
    else if (num === 1) { return `${one}`; }
    else if (num === 2) { return `${two}`; }
    else if (num === 3) { return `${three}`; }
    else if (num === 4) { return `${four}`; }
    else if (num === 5) { return `${five}`; }
    else if (num === 6) { return `${six}`; }
    else if (num === 7) { return `${seven}`; }
    else if (num === 8) { return `${eight}`; }
    else if (num === 9) { return `${nine}`; }
  }

  //for all numbers from 10 to 99
  else if (numLength === 2) {
    if (num === 10) { return `${ten}`; }
    else if (num === 11) { return `eleven`; }
    else if (num === 12) { return `twelve`; }

    //piece together teen and the prefix
    //TODO more abstraction
    else if (num >= 13 && num <= 19) {
      if (num === 13) { return `${threePrefix}${teen}`; }
      else if (num === 14) { return `${fourPrefix}${teen}`; }
      else if (num === 15) { return `${fivePrefix}${teen}`; }
      else if (num === 16) { return `${sixPrefix}${teen}`; }
      else if (num === 17) { return `${sevenPrefix}${teen}`; }
      else if (num === 18) { return `${eightPrefix}${teen}`; }
      else if (num === 19) { return `${ninePrefix}${teen}`; }
    }

    //numbers 20 to 100
    else if (num >= 20 && num <= 99) {
      //make a factory that puts the words together
      //21 => twoPrefix + tenSuffix + endNum;
      suffix = 'ty';

      if (splitNum[0] === 2) { prefix = twoPrefix; }
      else if (splitNum[0] === 3) { prefix = threePrefix; }
      else if (splitNum[0] === 4) { prefix = fourPrefix; }
      else if (splitNum[0] === 5) { prefix = fivePrefix; }
      else if (splitNum[0] === 6) { prefix = sixPrefix; }
      else if (splitNum[0] === 7) { prefix = sevenPrefix; }
      else if (splitNum[0] === 8) { prefix = eightPrefix; }
      else if (splitNum[0] === 9) { prefix = ninePrefix; }
      
      if (splitNum[1] === 0) { endNumber = ''; }
      else if (splitNum[1] === 1) { endNumber = two; }
      else if (splitNum[1] === 2) { endNumber = three; }
      else if (splitNum[1] === 3) { endNumber = four; }
      else if (splitNum[1] === 4) { endNumber = five; }
      else if (splitNum[1] === 5) { endNumber = six; }
      else if (splitNum[1] === 6) { endNumber = seven; }
      else if (splitNum[1] === 7) { endNumber = eight; }
      else if (splitNum[1] === 8) { endNumber = nine; }

      return `${prefix}${suffix}${endNumber}`;
    }

    else if (num >= 100 && num <= 999) {
      //ninehundred-ninety-nine
      let hundred = 'hundred';
      let tensSuffix = 'ty';
      if (splitNum[0] === 1) { prefix = one; }
      else if (splitNum[0] === 2) { prefix = two; }
      else if (splitNum[0] === 3) { prefix = three; }
      else if (splitNum[0] === 4) { prefix = four; }
      else if (splitNum[0] === 5) { prefix = five; }
      else if (splitNum[0] === 6) { prefix = six; }
      else if (splitNum[0] === 7) { prefix = seven; }
      else if (splitNum[0] === 8) { prefix = eight; }
      else if (splitNum[0] === 9) { prefix = nine; }

    



      return `${prefix}-${hundred}${suffix}${tenSuffix}${endNumber}`;

    }


  //for numbers 1000 to 10000

  //for numbers 10000 to 100000

  //for numbers 100000 to 1000000


  //74.79 == 'seventy-four.seventy-nine'
  //1 == 'one'
  //10 == 'ten'
  //11 == 'eleven'
  }
  

