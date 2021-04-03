//assuming standard ASCII. Change '128' to match chosen character encoding
function isUnique(string) {
  if (string.length > 128) return false; //quick check for huge strings

  for (let i = 0; i < string.length - 1; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string.charAt(i) === string.charAt(j)) return false;
    }
  }

  return true;
}

// O(n^2) time, 0(1) space

console.log('string "abcd":', isUnique( 'abcd'));
console.log('string "     ":', isUnique( '     '));
console.log('string "test string":', isUnique('test string'));
