var _ = require("lodash");

var exercises = {};

// 8 points
// this function takes a variable number of string arguments
// use the arguments keyword as well as the _.each() method from
// lodash to return the first string containing the substring
// "waldo"
exercises.wheresWaldo = function() {
  // TODO: implement me
  var found;
  _.each(arguments, function(val, index) {
    var searched = val.search('waldo');
      if (searched >= 0) {
        found = val;
        return false;
      }
  });
  if (found == null) {
    return 'I could not find Waldo!'
  }
  else {
    return found;
  }
};

console.log(exercises.wheresWaldo("waldrf", "bobwald"));
// 8 points
// given an array of arrays (all holding numbers), return an
// array holding the largest number in each sub-array.
// use _.chain() and _.map() and _.max()

var testData = [ [ 1, 2 ],  [ 4, 10 ],  [ 15, 1, 3 ],  [ 0 ] ];
exercises.largestNums = function(arrayOfNumberArrays) {
  // TODO: implement me
  var bigNums = _.chain(arrayOfNumberArrays)
  .map(function(eachArray) {
    return _.max(eachArray);
  })
  .value();

  return bigNums;
};

console.log(exercises.largestNums(testData));

// 8 points
// you are given an array of Date objects and two boundary dates
// use the lodash _.filter() method to return an array with all
// the objects from dates that fit within the given boundaries
 var dateArray = [],
        lower = new Date("2001/01/01"),
        upper = new Date("2004/01/01");

    // create test data
    dateArray.push( new Date("2000/12/1") );
    dateArray.push( new Date("2001/12/1") );
    dateArray.push( new Date("2002/12/1") );
    dateArray.push( new Date("2003/12/1") );

exercises.filterDates = function(dates, lowerBound, upperBound) {
  // TODO: implement me
  var result = [];
  _.filter(dates, function(date) {
     if (date > lowerBound && date < upperBound) {
      result.push(date);
     }
  })
  return result;
};

console.log(exercises.filterDates(dateArray, lower, upper));

// 16 points (including the test)
// make up your own exercise like those above. implement it and
// write a test for it in tests/functional.spec.js.
// for 4 extra credit points, use _.reduce()
// exercises.TODO = function(array) {
// };

module.exports = exercises;
