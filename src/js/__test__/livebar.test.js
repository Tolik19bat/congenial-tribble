import liveBar from '../liveBar.js';

test('Функция liveBar должна правильно выводить уровень здоровья', () => {
  const healthLevels = [
    { health: 90, expected: 'healthy' },
    { health: 50, expected: 'wounded' },
    { health: 15, expected: 'wounded' },
    { health: 10, expected: 'critical' },
  ];

  healthLevels.forEach(level => {
    expect(liveBar({ name: '', health: level.health })).toEqual(level.expected);
  });
});

