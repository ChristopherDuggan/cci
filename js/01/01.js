function isUnique(string) {
  let charArray = new Array(128); //array size assumes standard ASCII

  for (let i = 0; i < string.length; i++ ) {
    if (charArray [string.charCodeAt(i)]) return false;
    charArray[string.charCodeAt(i)] = true;
  }

  return true;
}

console.log('string "abcd":', isUnique( 'abcd'));
console.log('string "     ":', isUnique( '     '));
console.log('string "test string":', isUnique('test string'));
