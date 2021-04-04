/* URLify: Write a method to replace all spaces in a string with '%20'. You may
 * assume tha't the string has sufficient space at the end to hold the
 * additional characters, and that you are given the "true" length of the
 * string.
 *
 * EXAMPLE
 * Input:     "Mr John Smith    ", 13
 * Output:    "Mr%20John%20Smith"
 */

/*Thoughts:
 * Is there a native js method for replacing a character inside a
 * string? Can it be used to replace a char with multiple chars?
 *
 * yes. String.prototype.replace() is a cheaty way to do this within javascript
 * using a regex
 *
 * Without using a built in method, we could construct a new string by iterating
 * through the given one and pushing in whatever character we hit, except
 * pushing '%20' instead of ' '.
 */

/* Using String.prototype.replace():
function replaceSpaces(string) {
  return string.replace(/ /g, "%20");
}
*/


// O(n) time, O(n) space
function replaceSpaces(string) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === ' ')  {
      newString += '%20';
    } else {
      newString += string.charAt(i);
    }
  }

  return newString;
}

console.log(replaceSpaces("this is a test string"));
console.log(replaceSpaces("   "));
