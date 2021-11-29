import { isAnagram } from "./isAnagram";

// word has max length s
// n words in an array
// isAnagram O(2s)
// O(n * s^2)
// function groupAnagrams(words: string[]): string[][] {
//   const groupedWords = [[words[0]]];

//   for (let i = 1; i < words.length; i++) {
//     const word = words[i];
//     let belongs = false;

//     for (let j = 0; j < groupedWords.length; j++) {
//       const groupWord = groupedWords[j][0];

//       if (isAnagram(word, groupWord)) {
//         groupedWords[j].push(word);
//         belongs = true;
//         break;
//       }
//     }

//     if (!belongs) {
//       groupedWords.push([word]);
//     }
//   }

//   return groupedWords;
// }

// O(2n * 2slog(s))
function getSortedAnagram(word: string) {
  const wordMap = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    wordMap[letter] = wordMap[letter] + 1 || 1;
  }

  return Object.keys(wordMap).sort().toString();
}

function groupAnagrams(words: string[]): string[][] {
  const anagramMap = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const sortedAnagram = getSortedAnagram(word);

    if (!anagramMap[sortedAnagram]) {
      anagramMap[sortedAnagram] = [word];
    } else {
      anagramMap[sortedAnagram].push(word);
    }
  }

  return Object.values(anagramMap);
}

// [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
