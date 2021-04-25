/* One Away:
 * There are three types of edits that can be performed on strings: insert a
 * character, remove a character, or replace a character. Given two strings,
 * write a function to check if they are one edit (or zero edits) away.
 *
 * EXAMPLE pale, ple -> true
 * pales, pale -> true
 * pale, bale -> true
 * pale, bake -> false
 */

/* Thoughts:
 * We can immediately return false if the difference in the lengths of the
 * strings is greater than 1, which we can check by looking at the absolute
 * value of string1.length - string2.length.
 *
 * I suspect we can figure this out in a single pass by comparing string1[i] to
 * string2[i], and counting the number of differences. Of course, if one of the
 * strings is longer than the other, that means we will have to account for the
 * additional character not throwing off the difference count. For example
 * 'abcd' and 'bcd' would seem to have no characters in common if we compare
 * first character to first, second to second, etc.
 *
 * To avoid this issue, we can use i-1 on the shorter string once we've hit a
 * difference for the remainder of the comparison.
 */

function isOneAway(string1, string2) {
  if (Math.abs(string1.length - string2.length) > 1) return false;

  let diffCount = 0;

  const sortedLength = [string1, string2].sort(function(a, b) {
    return b.length - a.length;
  });

  const longer = sortedLength[0];
  const shorter = sortedLength[1];

  for (let i = 0; i < longer.length; i++) {
    if (longer[i] !== shorter[i - diffCount]) {
      diffCount++;
      if ((shorter.length !== longer.length) && (longer[i] === shorter[i - diffCount])){
        i--;
      }
    }

    if (diffCount > 1) return false;
  }
  return true;
}

console.log(isOneAway('candy', 'candy1'));
console.log(isOneAway('candy', 'carndy'));
console.log(isOneAway('candy', 'corndy'));
console.log(isOneAway('candy', 'candy12'));
