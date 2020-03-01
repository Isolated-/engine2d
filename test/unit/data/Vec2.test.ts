import { Vec2 } from '../../../src/data/Vec2';

describe('Vec2 unit test', () => {
  test('should create an instance of Vec2', () => {
    const vec2 = new Vec2(10, 10);

    expect(vec2).toBeInstanceOf(Vec2);
    expect(vec2.x).toBe(10);
    expect(vec2.y).toBe(10);
  });
});
