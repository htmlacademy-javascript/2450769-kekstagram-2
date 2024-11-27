const makeLength = (line, letters) => letters <= line.length;
makeLength('Привет', 10);

function isPalindrome (str) {
  const reversed = str.toString().split('').reverse().join('');
  if (reversed.replaceAll(' ', '').toLowerCase() === str.toString().replaceAll(' ', '').toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
isPalindrome('топот');

function isNumberOnly (str) {
  const matches = str.toString().replace(/[^0-9]/g, '');
  if (parseInt(matches, 10)) {
    return +matches;
  } else {
    return NaN;
  }
}

isNumberOnly('2023 год');
