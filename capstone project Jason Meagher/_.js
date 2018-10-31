const _ = {
  clamp(number, low, high) {
    let lowEndNumber = Math.max(number, low);
    let clampNum = Math.min(lowEndNumber, high);
    return clampNum;
    }

  inRange(number, start, end) {
    if(end === undefined){
      end = start;
      start = 0;
    };
    if(start > end){
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = (number >= start && number < end);

    return isInRange;
}


////////////////////////////////


  words(string) {
    let words = string.split(' ');
    return words;
  }


/////////////////////////////////

  pad(string, length) {
    if (length <= string.length){
      return string;
    }
    let startPad = (Math.floor((length - string.length)/2));
    let endPad = ((length-string.length)-startPad);
    let padString = ' ';

    return padString.repeat(startPad) + string + padString.repeat(endPad);

    return padString;

  }

///////////////////////////////


  has(object,key){
    let hasValue = (object[key] !== undefined);

    return hasValue

  }


///////////////////////////////


  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    };
    return invertedObject;
  }

////////////////////////////////

  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(object[key]);
      if (predicateReturnValue)  {
        return key;
    }
    }
         return undefined;
  }

/////////////////////////////

  drop(array, n) {
    if(n == null) {
      let n = 1;
    };
    let droppedArray = array.slice(n || 1);
    return droppedArray;
  }

//////////////////////////////

  dropWhile (array, predicate) {
  let dropNumber = array.findIndex((element, index) => {
        return !predicate(element, index);
   } );
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i], i, array)) {
      dropNumber = array.slice(2, i+2);
    }
  }

  return dropNumber;
}

/////////////////////////////////


  chunk(array, size){
    if (typeof size === 'undefined') {
        size = 1;
        }
    let arrayChunks = [];

    for (let i = 0; i < array.length; i += size){
      let arrayChunk = array.slice(i, i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }








};
// Do not write or modify code below this line.
module.exports = _;
