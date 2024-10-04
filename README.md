# JavaScript Task 1: Anagram Handling 🎉

Welcome to the **JavaScript Task 1: Anagram Handling** repository! 🏢 This project demonstrates a JavaScript implementation of an anagram checker, showcasing various examples and explanations of anagrams. 🤔

## Project Overview 📚

This repository contains:
- An HTML and CSS structure for implementing the anagram checker 💻
- JavaScript code to check if two words are anagrams ✅
- Examples illustrating how the anagram checker functions 🔍

## Understanding Anagrams 🔄

An **anagram** is a word or phrase formed by rearranging the letters of another word or phrase, typically using all the original letters exactly once. 🔄 This project highlights the concept of anagrams and provides code to verify them. 🧠

### How Anagrams Work 🤔

The process of determining if two words are anagrams involves these steps:
1. Convert both words to lowercase for case-insensitive comparison ⌨️
2. Remove any spaces or punctuation 🗑️
3. Sort the letters of both words alphabetically 📊
4. Compare the sorted versions of the words 👀

## JavaScript Implementation 💻

The core JavaScript function for checking anagrams is:

```javascript
function areAnagrams(word1, word2) {
    let cleanedWord1 = word1.toLowerCase().split('').sort().join('');
    let cleanedWord2 = word2.toLowerCase().split('').sort().join('');
    return cleanedWord1 === cleanedWord2;
}
```

This function cleans and compares the words to determine if they are anagrams. 🕵️‍♂️

## Examples 📝

Here are some examples demonstrating how the anagram checker works:

```javascript
console.log(areAnagrams("listen", "silent")); // true 🙌
console.log(areAnagrams("hello", "world")); // false ❌
console.log(areAnagrams("acts", "cats")); // true 🎉
console.log(areAnagrams("programming", "grammingorp")); // true 🤖
```

These examples showcase various scenarios where the anagram checker correctly identifies or rejects anagrams. 📊

## Usage Instructions 🛠️

To use this anagram checker in your project:

1. Include the JavaScript file in your HTML 📁
2. Call the `areAnagrams` function with two words as arguments 🔄
3. Check the returned boolean value to determine if they are anagrams 📊

## Additional Resources 📚

For those interested in learning more about HTML and CSS, here are some helpful resources:
- [HTML and CSS Book Resources](link_to_resources) 📖

## Contact Information 📞

For any queries or suggestions regarding this project:

Email: muhammadeshareeb986@gmail.com 📧
LinkedIn: https://www.linkedin.com/in/muhammadeshareeb986/ 🦸‍♂️

Happy coding!🎉
