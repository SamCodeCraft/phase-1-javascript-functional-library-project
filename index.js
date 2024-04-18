// Array Functions

function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const newArray = [];
  myEach(collection, function(item) {
    newArray.push(callback(item));
  });
  return newArray;
}

function myReduce(collection, callback, acc) {
  let start = 0;
  if (acc === undefined) {
    acc = collection[0];
    start = 1;
  }
  myEach(collection.slice(start), function(item) {
    acc = callback(acc, item, collection);
  });
  return acc;
}

function myFind(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }
}

function myFilter(collection, predicate) {
  const newArray = [];
  myEach(collection, function(item) {
    if (predicate(item)) {
      newArray.push(item);
    }
  });
  return newArray;
}

function mySize(collection) {
  let count = 0;
  myEach(collection, function() {
    count++;
  });
  return count;
}

// Array Functions

function myFirst(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(-n);
}

// Object Functions

function myKeys(object) {
  const keysArray = [];
  myEach(object, function(key) {
    keysArray.push(key);
  });
  return keysArray;
}

function myValues(object) {
  const valuesArray = [];
  myEach(object, function(value) {
    valuesArray.push(value);
  });
  return valuesArray;
}
