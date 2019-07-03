const teamObj = require('./team.js');

test('Returns an object', () => {
  const teamName = 'Unicron';
  const level = 100;
  const result = teamObj(teamName, level);

  expect(result).toEqual({'teamName':teamName, 'level':level, 'points':0});
});
