const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let a = expr.match(/.{1,10}/g);
  let output = '';
  for (let i = 0; i < a.length; i++) {
    let symbol = '';
    if (a[i] === '**********') {
      output += ' ';
    } else {
      for (let ii = 8; ii >= 0; ii -= 2) {
        if (a[i].substr(ii, 2) == '10') {
          symbol = '.' + symbol;
        } else if (a[i].substr(ii, 2) == '11') {
          symbol = '-' + symbol;
        }
      }
      output += MORSE_TABLE[symbol];
    }
  }
  return output;
}

module.exports = {
  decode
}