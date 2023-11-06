const util = {
  convertnumbertoString(number) {
    //create a lookup table that maps 1 to one 2 to two etc.
    let lookup = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
    }
    //if the number is in the lookup table return the value
    if (number in lookup) {
      //capitalize the first letter
      lookup[number] =
        lookup[number].charAt(0).toUpperCase() + lookup[number].slice(1)
      return lookup[number]
    }
    //if the number is not in the lookup table return the number
    else {
      return number
    }
  },
}

export default util
