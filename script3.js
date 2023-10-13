// ongest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const strs = ["flower","flow","flight"]
function prefix(strs){
  const tempArr=[];
for (let i = 0; i < strs.length; i++) {
    if (strs[i].charAt(2) === strs[i+1].charAt(2)) {
        tempArr.push(strs[i].charAt(2))
    }
}
return tempArr
}
console.log(prefix(strs));