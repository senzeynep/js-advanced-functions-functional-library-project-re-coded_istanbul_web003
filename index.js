const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let col = Object.values(collection);
      for (let i = 0; i < col.length; i++ ) {
        callback(col[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      collection = Object.values(collection)
      let array = []
      for (let i = 0; i < collection.length; i++ ) {
        array.push(callback(collection[i]))
      }
      return array;
    },

    reduce: function(collection, callback, acc) {
      if ( acc === undefined) {
        acc = collection[0] 
        collection = collection.slice(1)
      }
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection)
        }
        return acc
    },

    find: function (collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      let array = [];
      for ( let i = 0; i<collection.length; i++) {
        if (predicate(collection[i])) {
          array.push(collection[i])
        }
      }
      return array
    },

    size: function (collection) {
      if (collection instanceof Array) {
        return collection.length
      }
      else {
        collection = Object.keys(collection)
        return collection.length
      }
    },

    first: function (collection, n) {
      let array = []
      if (!n) {
        return collection[0]
      } else {
        for (let i = 0; i < n; i++) {
          array.push(collection[i])
        }
        return array;
      }
    },

    last: function (collection, n) {
      return (n?collection.slice(collection.length - n, collection.length) : collection[collection.length - 1])
    },
    compact: function(collection) {
      let array = []
      collection.forEach( e => {
        if (e) {
          array.push(e)
        }
      });
      return array
    },

    sortBy: function(collection, callback) {
      let array = [...collection]
      return array.sort(function (x, y) {
        return callback(x) - callback(y)
      })
    },

    flatten: function flatten(array, shallow) {
      let arr = []
      for (let number in array) {
        if (shallow) {
          if (Array.isArray(array[number])) {
            arr = arr.concat(array[number])
          } else {
            arr.push(array[number])
          }
        }
        else {
          if (!Array.isArray(array[number])) {
            arr.push(array[number])
          } else {
            arr = arr.concat(this.flatten(array[number]))
          }
        }
      }
      return arr
    },

    uniq: function (array, isSorted, callback) {
      let uniq = [];
      let lastArr = [];
      let newArr = [];
      if (callback) {
        for (let i = 0; i < array.length; i++) {
          newArr.push(callback(array[i]))
        }
      } else {
        newArr = [...array]
      }
      for (let i = 0; i < newArr.length; i++ ) {
        if (uniq.indexOf(newArr[i]) === -1) {
          uniq.push(newArr[i])
          lastArr.push(array[i])
        }
      }
      if (isSorted) {
        return lastArr
      } else {
        return lastArr.sort((x, y) => x - y)
      }
    },
    keys: function (object) {
      let keys = [];
      for (let key in object) {
       keys.push(key)
      }
      return keys
    },

    values: function (object) {
      let values = [];
      for (let key in object) {
       values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      const functionNames = [];
      for (let key in object) {
        if (typeof object[key] === "function") {
          functionNames.push(key)
        }
      }
          return functionNames.sort()
    },
  }
})()

fi.libraryMethod()
