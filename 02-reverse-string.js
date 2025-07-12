// Reverse String Problem
// Write a function that reverses a string.

/**
 * Reverses a string using different approaches
 * @param {string} str - The input string
 * @returns {string} - The reversed string
 */
// Approach 1: Using built-in methods
function reverseString1(str) {
    return str.split('').reverse().join('');
}

// Approach 2: Using a loop
function reverseString2(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Approach 3: Using recursion
function reverseString3(str) {
    if (str === '') {
        return '';
    }
    return reverseString3(str.substr(1)) + str.charAt(0);
}

// Approach 4: Using two pointers (for array of characters)
function reverseString4(str) {
    const arr = str.split('');
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    
    return arr.join('');
}

// Test cases
console.log('Test cases for Reverse String:');
console.log(reverseString1('hello')); // Output: 'olleh'
console.log(reverseString2('world')); // Output: 'dlrow'
console.log(reverseString3('JavaScript')); // Output: 'tpircSavaJ'
console.log(reverseString4('ABCDEF')); // Output: 'FEDCBA'

// Time Complexity: O(n) for all approaches
// Space Complexity: O(number) for approach 1 and 4, O(n) for approach 1 and 3 (for recursive call stack)