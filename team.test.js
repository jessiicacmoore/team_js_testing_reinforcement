const teamObj = require('./team.js');

test('Returns an object when function is called with args', () => {
  const teamName = 'Unicron';
  const level = 100;
  const result = teamObj(teamName, level);
  const expectation = {'teamName':teamName, 'level':level, 'points':0};
  expect(result).toEqual(expectation);
});

test('Returns Obj with undefined values when no args are provided', () => {
  const result = teamObj();
  const expectation = {'teamName':undefined, 'level':undefined, 'points':0};
  expect(result).toEqual(expectation);
});

test('Points remain 0 even when trying to pass in a third arg', () => {
  const teamName = 'Unicron';
  const level = 100;
  const result = teamObj(teamName, level, 50);
  const expectation = {'teamName':teamName, 'level':level, 'points':0};
  expect(result).toEqual(expectation);
});

