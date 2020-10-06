const _ = {
    clamp(number, lower, upper){
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end){
        if (end === undefined){
            end = start
            start = 0
        }
        if (start > end){
            let tmp = start
            start = end
            end = tmp
        }
        if (number >= start && number < end){
            return true;
        } else if (number < start || number >= end){
            return false;
        }
    },
    words(string){
        const words = string.split(' ');
        return words;
    },
    pad(string, length){
        if (length <= string.length){
            return string;
        } else {
            const startPaddingLength = Math.floor((length - string.length) / 2);
            const endPaddingLength = length - string.length - startPaddingLength;
            const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
            return paddedString;            
        }
    },
    has(object, key){
        const hasValue = object[key];
        if (hasValue != undefined){
            return true;
        } else {
            return false;
        }
    },
    invert(object){
        let invertedObject = {};
        for (let key in object){
            const originalValue = object[key];
            invertedObject = {originalValue : key}
        }
        return invertedObject;
    },
    findKey(object, predicate){
        for (let key in object){
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue){
                return key;
            };
        };
        return undefined;
    },
    drop(array,n){
        if (n === undefined){
            n = 1;
        };
        let droppedArray = array.slice(n);
        return droppedArray;
    },
    dropWhile(array, predicate){
        function callback(element, index){
            return !predicate(element, index, array);
        }
        let dropNumber = array.findIndex(callback);
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },
    chunk(array, size){
        if (size === undefined){
            size = 1;
        };
        let arrayChunks = [];
        for ( i=0 ; i < array.length ; i += size){
            let arrayChunk = array.slice(i,i+size);
            arrayChunks.push(arrayChunk);
        };
        return arrayChunks;
    }
};




// Do not write or modify code below this line.
module.exports = _;