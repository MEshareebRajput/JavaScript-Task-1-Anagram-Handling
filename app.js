areAnagrams("tea", "eat"); // returns true
areAnagrams("listen", "silent"); // returns true
areAnagrams("hello", "world"); // returns false


// Function to check if two words are anagrams
function areAnagrams(word1, word2) {
    // Step 1: Convert both words to lowercase so that case doesn't matter
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    // Step 2: Convert words to arrays, sort them alphabetically, and join back to strings
    let sortedWord1 = word1.split('').sort().join('');
    let sortedWord2 = word2.split('').sort().join('');

    // Step 3: Check if the sorted versions of both words are the same
    if (sortedWord1 === sortedWord2) {
        return true; 
    } else {
        return false; 
    }
}

// Test examples
console.log(areAnagrams("tea", "eat"));       // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false
console.log(areAnagrams("listen", "silent")); // Output: true

