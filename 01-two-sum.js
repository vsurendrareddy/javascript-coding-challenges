// Two Sum Problem
// Given an array of integers and a target sum, return indices of two numbers that add up to the target

/**
 * Finds two numbers in an array that add up to a target sum
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @returns {number[]} - Indices of two numbers that add up to target
 */
function twoSum(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        numMap.set(nums[i], i);
    }
    
    return []; // No solution found
}

// Test cases
console.log('Test cases for Two Sum:');
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]

// Time Complexity: O(n)
// Space Complexity: O(n)