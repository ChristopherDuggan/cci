//assuming standard ASCII. Change '128's to match chosen character encoding
function isUnique(string) {
  if (string.length > 128) return false; //quick check for huge strings
  let charArray = new Array(128);

  for (let i = 0; i < string.length; i++ ) {
    if (charArray [string.charCodeAt(i)]) return false;
    charArray[string.charCodeAt(i)] = true;
  }

  return true;
}

console.log('string "abcd":', isUnique( 'abcd'));
console.log('string "     ":', isUnique( '     '));
console.log('string "test string":', isUnique('test string'));
