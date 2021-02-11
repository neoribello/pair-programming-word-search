// PAIR PROGRAMMING - @Nolan-E & @neoribello
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
  
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  
    const column = letters[0].length;
    const row = letters.length;
  
    let output = '';
  
    for (let i = 0; i < column; i++) {
      for (let j = 0; j < row; j++) {
        output += letters[j][i];
      }
      if (output.includes(word)) {
        return true;
      }
      output = '';
    }
    return false;
  };
  
  module.exports = wordSearch;