function checkLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

checkLength('sssssssssssssss' , 10);
checkLength('ssssss' , 10);
checkLength('ssssssssss' , 10);

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/\s/g, '');
  const length = cleanedStr.length;
  for (let i = 0; i < length / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

isPalindrome('топот');
isPalindrome('Довод');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл');
isPalindrome('А роза упала на лапу Азора');

