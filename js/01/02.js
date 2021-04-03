/* Check Permutation:
 * Given two strings, write a method to decide if one is a permutation of the
 * other
 */

/* Thoughts:
 * The strings must be the same length since there will be a disparity of
 * character counts at different lengths.
 *
 * We can use a hash table where each index will is associated with a character
 * in the charset. Each bucket will hold an increasing count for the character
 * hit while iterating through the first string, then the count will be
 * decreased while iterating through the second string. If the value of a bucket
 * in the second run through is ever less than 0, there are more of that
 * character in the second string than the first so we can return false.
 */


//O(n) time, O(1) space
function isPermutation (string1, string2) {
  if (string1.length !== string2.length) return false;

  let charArray = new Array(128); //assuming standard ASCII

  for (let i = 0; i < string1.length; i++) {
    if (!charArray[string1.charCodeAt(i)]) {
      charArray[string1.charCodeAt(i)] = 0;
    }
    charArray[string1.charCodeAt(i)]++;
  }

  for (let j = 0; j < string2.length; j++) {
    if (!charArray[string2.charCodeAt(j)]) return false;
    charArray[string2.charCodeAt(j)]--;
    if (charArray[string2.charCodeAt(j)] < 0) return false;
  }

  return true;
}


console.log(isPermutation('1234', '1235'));
console.log(isPermutation('real', 'lear'));
console.log(isPermutation('', 'word'));
console.log(isPermutation('word', ''));
