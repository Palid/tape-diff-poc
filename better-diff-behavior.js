const tape = require('tape');


function naiveDeepSortKeys(object) {
  const newObject = {};
  Object.keys(object)
    .sort()
    .forEach((key) => {
      const value = object[key];
      if (Array.isArray(value)) {
        newObject[key] = value.sort();
      }
      else if (typeof value === 'object') {
        newObject[key] = TestEngine.naiveDeepSortKeys(value)
      } else {
        newObject[key] = value;
      }
    });
  return newObject;
}


tape.test('not sorting objects for diff', function(test) {
  test.deepEquals(naiveDeepSortKeys({
    unsorted: 1,
    keys: 2,
    here: 3,
    kittens: 4,
    also: 5
  }), naiveDeepSortKeys({
    kittens: 4,
    also: 5,
    unsorted: 2,
    keys: 2,
    here: 3,
  }));
});
