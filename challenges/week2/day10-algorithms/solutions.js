// Problem 1: Group Anagrams
// Input: string[] — group strings that are anagrams of each other
// Example: ["eat","tea","tan","ate","nat","bat"] → [["eat","tea","ate"],["tan","nat"],["bat"]]
// Time complexity: O(?) Space: O(?)
function groupAnagrams(strs) {
  // TODO
}

// Problem 2: Longest Substring Without Repeating Characters
// Input: string — return length of longest substring with no repeated chars
// Example: "abcabcbb" → 3 ("abc")
// Time complexity: O(?) Space: O(?)
function lengthOfLongestSubstring(s) {
  // TODO
}

// Problem 3: Two Sum — All Pairs
// Input: number[], target — return all unique [a,b] pairs where a+b === target
// Example: [1,2,3,4,5], 5 → [[1,4],[2,3]]
// Time complexity: O(?) Space: O(?)
function twoSumAllPairs(nums, target) {
  // TODO
}

// Tests
console.log('\nGroup Anagrams:');
console.log(JSON.stringify(groupAnagrams(["eat","tea","tan","ate","nat","bat"])));

console.log('\nLongest Substring:');
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3

console.log('\nTwo Sum All Pairs:');
console.log(JSON.stringify(twoSumAllPairs([1,2,3,4,5], 5)));   // [[1,4],[2,3]]
console.log(JSON.stringify(twoSumAllPairs([1,1,2,3], 4)));      // [[1,3]]
