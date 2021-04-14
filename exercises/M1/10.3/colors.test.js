const colors = require('./colors');

test('#randomRGBColor', () => {
  colors.randomRgbColor = jest
  .fn()
  .mockReturnValue('default value')
  .mockReturnValueOnce('first call')
  .mockReturnValueOnce('second call');

  expect(colors.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(colors.randomRgbColor()).toBe('first call');
  expect(colors.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(colors.randomRgbColor()).toBe('second call');
  expect(colors.randomRgbColor).toHaveBeenCalledTimes(2);
});
