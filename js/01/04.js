/* Palindrome Permutations:
 * Given a string, write a function to check if it is a permutation of a
 * palindrome. A palindrome is a word or phrase that  is the same forwards and
 * backwards. A permutation is a rearrangement of letters. The palindrome does
 * not need to be limited to just dictionary words.
 *
 * EXAMPLE:
 * Input:       Tact Coa
 * Output: True (permutations: "taco cat", "atco cta", etc.)
 */

/* Thoughts:
 * From the example, we can see that our function will ignore both case and
 * spaces. Because the palindrome doesn't need to be made up of real words, we
 * essentially only need to count the occurrences of each character and once
 * we're done, return true if there is no more than one character that occurs an
 * odd number of times.
 *
 * We can create a hash table of binary values then iterate through the string,
 * flipping the switch for the appropriate (lower case) character we encounter,
 * excluding spaces. This will have a "true" value placed in the bucket of any
 * character that appears an odd number of times. We then check the hash table
 * and return true unless we encounter 2 trues.
 *
 * If we wanted to do this in a way that is a bit easier to understand at a
 * glance, we could instead create a hash table that has numbers assigned to
 * each character, then use the % operator to check the number of odd counts.
 */


function isPalindrome(string) {
  string = string.toLowerCase();
  let charArray = new Array (128); //assuming ASCII

  for ( let i = 0; i < string.length; i++) {
    if (string.charAt(i) !== " ") {
      charArray[string.charCodeAt(i)] = !charArray[string.charCodeAt(i)];
    }
  }

  let oddCount = 0;

  for (let j = 0; j < charArray.length; j++) {
    if (charArray[j] === true) oddCount++;
    if (oddCount > 1) return false;
  }

  return true;
}

console.log(isPalindrome('hello')) ;
console.log(isPalindrome('Tact Coa'));
console.log(isPalindrome('. . tt o '));
console.log(isPalindrome('anddna'));
console.log(isPalindrome('abcd'));
