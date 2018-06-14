//show how to spell out a number in english
//roll your own
//support numbers up to one million
//optional: support for inputs other than positive numbers as well

const numberNames = (num = 0) => {

  //returns the digits of the number split 
  let splitNum = num.toString().split('');
  //returns the amount of digits in the number
  let numLength = splitNum.length;

  //to piece together the numbers zero to 10
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

  //general roots
  const twoRoot = 'twen';
  const threeRoot = 'thir';
  const fourRoot = four;
  const fiveRoot = 'fif';
  const sixRoot = six;
  const sevenRoot = seven;
  const eightRoot = eight;
  const nineRoot = nine;
  const tenRoot = ten;

  //suffixes to use
  let tens = 'ty';
  let hundred = 'hundred';
  let thousands = 'thousand';

  if (num > -1 && num < 20) {
    if (num === 0) { return 'zero'; }
    else if (num === 1) { return 'one'; }
    else if (num === 2) { return 'two'; }
    else if (num === 3) { return 'three'; }
    else if (num === 4) { return 'four'; }
    else if (num === 5) { return 'five'; }
    else if (num === 6) { return 'six'; }
    else if (num === 7) { return 'seven'; }
    else if (num === 8) { return 'eight'; }
    else if (num === 9) { return 'nine'; }
    else if (num === 10) { return 'ten'; }
    else if (num === 11) { return 'eleven'; }
    else if (num === 12) { return 'twelve'; }
    else if (num === 13) { return 'thirteen'; }
    else if (num === 14) { return 'fourteen'; }
    else if (num === 15) { return 'fifteen'; }
    else if (num === 16) { return 'sixteen'; }
    else if (num === 17) { return 'seventeen'; }
    else if (num === 18) { return 'eighteen'; }
    else if (num === 19) { return 'nineteen'; }
  }

  let fullWord = [];


  if (numLength === 6) {
    //100000; ['1', '0', '0', '0', '0', '0']; 6
    if (splitNum[0] === '1') { fullWord.push(`${one}-${hundred}`); }
    else if (splitNum[0] === '2') { fullWord.push(`${two}-${hundred}`); }
    else if (splitNum[0] === '3') { fullWord.push(`${three}-${hundred}`); }
    else if (splitNum[0] === '4') { fullWord.push(`${four}-${hundred}`); }
    else if (splitNum[0] === '5') { fullWord.push(`${five}-${hundred}`); }
    else if (splitNum[0] === '6') { fullWord.push(`${six}-${hundred}`); }
    else if (splitNum[0] === '7') { fullWord.push(`${seven}-${hundred}`); }
    else if (splitNum[0] === '8') { fullWord.push(`${eight}-${hundred}`); }
    else if (splitNum[0] === '9') { fullWord.push(`${nine}-${hundred}`); }
    splitNum.shift();
  }

  numLength = splitNum.length;

  if (numLength === 5) {
    //10000; [1,0,0,0,0]; 5
    //push nothing if 0
    if (splitNum[0] === '0') { fullWord.push(``) }
    else if (splitNum[0] === '1') { fullWord.push(`eleven`); }
    else if (splitNum[0] === '2') { fullWord.push(`${twoRoot}${tens}`); }
    else if (splitNum[0] === '3') { fullWord.push(`${threeRoot}${tens}`); }
    else if (splitNum[0] === '4') { fullWord.push(`${fourRoot}${tens}`); }
    else if (splitNum[0] === '5') { fullWord.push(`${fiveRoot}${tens}`); }
    else if (splitNum[0] === '6') { fullWord.push(`${sixRoot}${tens}`); }
    else if (splitNum[0] === '7') { fullWord.push(`${sevenRoot}${tens}`); }
    else if (splitNum[0] === '8') { fullWord.push(`${eightRoot}${tens}`); }
    else if (splitNum[0] === '9') { fullWord.push(`${nineRoot}${tens}`); }
    splitNum.shift();
  }

  numLength = splitNum.length;

  if (numLength === 4) {
    if (splitNum[0] === '0') { fullWord.push(`-${thousands}`); }
    else if (splitNum[0] === '1') { fullWord.push(`${one}-${thousands}`); }
    else if (splitNum[0] === '2') { fullWord.push(`${two}-${thousands}`); }
    else if (splitNum[0] === '3') { fullWord.push(`${three}-${thousands}`); }
    else if (splitNum[0] === '4') { fullWord.push(`${four}-${thousands}`); }
    else if (splitNum[0] === '5') { fullWord.push(`${five}-${thosuands}`); }
    else if (splitNum[0] === '6') { fullWord.push(`${six}-${thousands}`); }
    else if (splitNum[0] === '7') { fullWord.push(`${seven}-${thousands}`); }
    else if (splitNum[0] === '8') { fullWord.push(`${eight}-${thousands}`); } 
    else if (splitNum[0] === '9') { fullWord.push(`${nine}-${thousands}`); }
    splitNum.shift();
  }

  numLength = splitNum.length; 

  if (numLength === 3) {
    // if (splitNum[0] === '0') { fullWord.push(`${hundred}`); }
    if (splitNum[0] === '1') { fullWord.push(`${one}-${hundred}`); }
    else if (splitNum[0] === '2') { fullWord.push(`${two}-${hundred}`); }
    else if (splitNum[0] === '3') { fullWord.push(`${three}-${hundred}`); }
    else if (splitNum[0] === '4') { fullWord.push(`${four}-${hundred}`); }
    else if (splitNum[0] === '5') { fullWord.push(`${five}-${hundred}`); }
    else if (splitNum[0] === '6') { fullWord.push(`${six}-${hundred}`); }
    else if (splitNum[0] === '7') { fullWord.push(`${seven}-${hundred}`); }
    else if (splitNum[0] === '8') { fullWord.push(`${eight}-${hundred}`); }
    else if (splitNum[0] === '9') { fullWord.push(`${nine}-${hundred}`); }
    splitNum.shift();
  }

  numLength = splitNum.length;

  if (numLength === 2) {
    if (splitNum[0] === '1') { 
        if (splitNum[1] === '0') { fullWord.push(`ten`); }
        else if (splitNum[1] === '1') { fullWord.push(`eleven`); }
        else if (splitNum[1] === '2') { fullWord.push(`twelve`); }
        else if (splitNum[1] === '3') { fullWord.push(`thirteen`); }
        else if (splitNum[1] === '4') { fullWord.push(`fourteen`); }
        else if (splitNum[1] === '5') { fullWord.push(`fifteen`); }
        else if (splitNum[1] === '6') { fullWord.push(`sixteen`); }
        else if (splitNum[1] === '7') { fullWord.push(`seventeen`); }
        else if (splitNum[1] === '8') { fullWord.push(`eighteen`); }
        else if (splitNum[1] === '9') { fullWord.push(`nineteen`); }
        splitNum = [];
    }
    else if (splitNum[0] === '2') { fullWord.push(`${twoRoot}${tens}`); }
    else if (splitNum[0] === '3') { fullWord.push(`${threeRoot}${tens}`); }
    else if (splitNum[0] === '4') { fullWord.push(`${fourRoot}${tens}`); }
    else if (splitNum[0] === '5') { fullWord.push(`${fiveRoot}${tens}`); }
    else if (splitNum[0] === '6') { fullWord.push(`${sixRoot}${tens}`); }
    else if (splitNum[0] === '7') { fullWord.push(`${sevenRoot}${tens}`); }
    else if (splitNum[0] === '8') { fullWord.push(`${eightRoot}${tens}`); }
    else if (splitNum[0] === '9') { fullWord.push(`${nineRoot}${tens}`); }
    splitNum.shift();
  }

  numLength = splitNum.length;

  if (numLength === 1) {
    //if the digit is 0, push nothing
    if (splitNum[0] === '0') { fullWord.push(``); }
    else if (splitNum[0] === '1') { fullWord.push(`-${one}`); }
    else if (splitNum[0] === '2') { fullWord.push(`-${two}`); }
    else if (splitNum[0] === '3') { fullWord.push(`-${three}`); }
    else if (splitNum[0] === '4') { fullWord.push(`-${four}`); }
    else if (splitNum[0] === '5') { fullWord.push(`-${five}`); }
    else if (splitNum[0] === '6') { fullWord.push(`-${six}`); }
    else if (splitNum[0] === '7') { fullWord.push(`-${seven}`); }
    else if (splitNum[0] === '8') { fullWord.push(`-${eight}`); }
    else if (splitNum[0] === '9') { fullWord.push(`-${nine}`); }
    splitNum.shift();
  }

  numLength = splitNum.length;
  if (numLength === 0) {
    return fullWord.join(' ');
  }
}

  

