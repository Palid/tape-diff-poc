const tape = require('tape');

tape.test('not sorting objects for diff', function(test) {
  test.deepEquals({
    unsorted: 1,
    keys: 2,
    here: 3,
    kittens: 4,
    also: 5
  }, {
    kittens: 4,
    also: 5,
    unsorted: 2,
    keys: 2,
    here: 3,
  });
});
