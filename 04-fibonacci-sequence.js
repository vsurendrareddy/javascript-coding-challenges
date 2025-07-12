// Fibonacci Sequence Problem
// Generate Fibonacci numbers using different approaches

/**
 * Generates Fibonacci numbers using recursion (simple but inefficient)
 * @param {number} n - The position in the Fibonacci sequence
 * @returns {number} - The Fibonacci number at position n
 */
function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/**
 * Generates Fibonacci numbers using dynamic programming (memoization)
 * @param {number} n - The position in the Fibonacci sequence
 * @returns {number} - The Fibonacci number at position n
 */
function fibonacciMemo(n) {
    const memo = {};

    function fib(k) {
        if (k in memo) return memo[k];
        if (k <= 1) return k;
        memo[k] = fib(k - 1) + fib(k - 2);
        return memo[k];
    }

    return fib(n);
}

/**
 * Generates Fibonacci numbers using iterative approach (outcome - and space efficient)
 * @param {number} n - The position in the Fibonacci sequence
 * @returns {number} - The Fibonacci number at position n
 */
function fibonacciIterative(n) {
    if (n <= 1) return n;

    let a = 0;
    let b = 1;
    let current = 0;

    for (let i = 2; i <= n; i++) {
        current = a + b;
        a = b;
        b = current;
    }

    return current;
}

/**
 * Generates the first n Fibonacci numbers as an array
 * @param {number} count - Number of Fibonacci numbers to generate
 * @returns {number[]} - Array of Fibonacci numbers
 */
function fibonacciSequence(count) {
    if (count <= 0) return [];
    if (count === 1) return [0];
    if (count === 2) return [0, 1];

    const sequence = [0, 1];

    for (let i = 2; i < count; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence;
}

/**
 * Special case: Find the sum of all even Fibonacci numbers up to a given limit
 * @param {number} limit - The upper limit
 * @returns {number} - Sum of all even Fibonacci numbers up to the limit
 */
function evenFibonacciSum(limit) {
    let a = 0;
    let b = 1;
    let sum = 0;

    while (b <= limit) {
        if (b % 2 === 0) {
            sum += b;
        }
        const next = a + b;
        a = b;
        b = next;
    }

    return sum;
}

/**
 * Check if a given number is in the Fibonacci sequence
 * @param {number} num - The number to check
 * @returns {boolean} - True if number is in Fibonacci sequence, false otherwise
 */
function isFibonacci(num) {
    if (num < 0) return false;
    if (num === 0 || num === 1) return true;

    let a = 0;
    let b = 1;

    while (b < num) {
        const next = a + b;
        a = b;
        b = next;
    }

    return b === num;
}

// Test cases
console.log('Test cases for Fibonacci Sequence:');
console.log('fibonacciRecursive(7):', fibonacciRecursive(7)); // Output: 13
console.log('fibonacciMemo(10):', fibonacciMemo(10)); // Output: 55
console.log('fibonacciIterative(15):', fibonacciIterative(15)); // Output: 610

console.log('First 10 Fibonacci numbers:', fibonacciSequence(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log('Sum of even Fibonacci numbers up to 100:', evenFibonacciSum(100));
// Output: 44 (2 + 8 + 34)

console.log('isFibonacci(21):', isFibonacci(21)); // Output: true
console.log('isFibonacci(22):', isFibonacci(22)); // Output: false

// Time Complexity:
// - Recursive: O(2^n) - exponential
// - Memoization: O(n)
// - Iterative: O(n)
// Space Complexity:
// - Recursive: O(n) - stack depth
// - Memoization: O(n) - memoization space
// - Iterative: O(1) - constant space