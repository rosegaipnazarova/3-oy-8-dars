//n1

// function palindrom(str) {
//     let str1 = str.toLowerCase()
//     let str2 = str1.split('').reverse().join('')
//     return str1 === str2
// }
// console.log(palindrom("apple"));

//n2

// function ikki(son) {
//     return son.toString(2)
// }
// console.log(ikki(5));

//n3

// function swapElements(arr, i, j) {
//     let narr = arr[i]
//     arr[i] = arr[j]
//     arr[j] = narr
//     return arr
// }
// console.log(swapElements([1, 22, 13, 4], 1, 2)); 


//n4

// function letterFre(str) {
//     let natija = {}
//     for (let i of str) {
//         if (i === " ") continue
//         if (natija[i]) {
//             natija[i]++
//         } else {
//             natija[i] = 1
//         }
//     }
//     return natija
// }
// console.log(letterFre("java")); 


//n5

// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false
//     }
//     let s1 = str1.toLowerCase().split('').sort().join('')
//     let s2 = str2.toLowerCase().split('').sort().join('')
//     return s1 === s2
// }
// console.log(isAnagram("listen", "silent"));


//n6

// function longestUniqueSubstring(str) {
//     let maxL = 0
//     let start = 0
//     let ind = {}
//     for (let i = 0; i < str.length; i++) {
//         if (ind[str[i]] !== undefined) {
//             start = Math.max(start, ind[str[i]] + 1)
//         }
//         ind[str[i]] = i
//         maxL = Math.max(maxL, i - start + 1)
//     }
//     return maxL
// }
// console.log(longestUniqueSubstring("abcabcbb"));

//n7

// function maxSubArraySum(arr) {
//     let maxa = arr[0]
//     let maxb = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         maxa = Math.max(arr[i], maxa + arr[i])
//         maxb = Math.max(maxb, maxa)
//     }
//     return maxb
// }
// console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 

//n8

