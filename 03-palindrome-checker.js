// Palindrome Checker Problem
// Determine if a given string is a palindrome (reads the same forward and backward)

/**
 * Checks if a string is a palindrome (ignoring case, spaces, and punctuation)
 * @param {string} str - The input string
 * @returns {boolean} - True if palindrome, false otherwise
 */
// Approach 1: Using built-in methods
function isPalindrome1(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Approach 2: Using two pointers
function isPalindrome2(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

// Approach 3: Using recursion
function isPalindrome3(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    function checkPalindrome(s, left, right) {
        if (left >= right) {
            return true;
        }
        if (s[left] !== s[right]) {
            return false;
        }
        return checkPalindrome(s, left + 1, right - 1);
    }
    
    return checkPalindrome(cleaned, 0, cleaned.length - 1);
}

// Advanced case: Find the longest palindromic substring
function longestPalindrome(str) {
    if (!str) return '';
    
    let start = 0;
    let maxLength = 1;
    
    for (let i = 0; i < str.length; i++) {
        // Check for odd length palindromes
        let left = i - 1;
        let right = i + 1;
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
        
        // Check for even length palindromes
        left = i;
        right = i + 1;
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }
    
    return str.substring(start, start + maxLength);
}

// Test cases
console.log('Test cases for Palindrome Checker:');
console.log(isPalindrome1('racear')); // Output: true
console.log(isPalindrome2('A man, a plan, a canal: Panama')); // Output: true
console.log(isPalindrome3('hello')); // Output: false
console.log(isPalindrome1('Madam')); // Output: true
console.log('Longest palindrome in \"babad\":', longestPalindrome('babad')); // Output: 'bab'

// Time Complexity: O(n) for approaches 1 and 2, O(n) for approach 3
// Space Complexity: O(n) for approach 1, O(1) for approach 1, O(n) for approach 3 (stack space)