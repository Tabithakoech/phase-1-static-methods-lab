class Formatter {
  //add static methods here
  //takes in a string and capitalizes the first letter.
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
//akes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, "")
  }
// takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
  static titleize(string){
    let newArr = []
    const stringArr = string.split(' ')
    const exceptW = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    stringArr.forEach(word=>{
      if (exceptW.indexOf(word)!==-1){
        if(stringArr.indexOf(word)===0){
          newArr.push(this.capitalize(word))
        } else {
          newArr.push(word)
        }
      } else {
        newArr.push(this.capitalize(word))
      }
    })
    return newArr.join(' ')
  }
}