function findLongestWordLength(str) {
    let splittedWordArray = str.split(" ")
    let length = [];
    let maxlength = 0;
    console.log(splittedWordArray);
    for (let i = 0; i < splittedWordArray.length; i++)
    {
      let strLength = splittedWordArray[i].length;
      console.log(strLength)
      length.push(strLength)
    }
    console.log(length)
  
    for (let i = 0; i < length.length; i++)
    {
      if (length[i] > i){
        maxlength = length[i];
      }
    }
    console.log(maxlength);
    return maxlength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  