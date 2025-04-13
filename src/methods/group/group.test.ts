import { describe, it } from 'vitest';
import './group';
describe('Object.prototype.myGroupBy', () => {
  it('should group elements by a given property', () => {
    const data = [
      { type: 'fruit', name: 'apple' },
      { type: 'fruit', name: 'banana' },
      { type: 'vegetable', name: 'carrot' },
    ];
    const result = Object.prototype.myGroupBy(data, (item) => item.type);
    expect(result).toEqual({
      fruit: [
        { type: 'fruit', name: 'apple' },
        { type: 'fruit', name: 'banana' },
      ],
      vegetable: [{ type: 'vegetable', name: 'carrot' }],
    });
  });

  it('should handle an empty array', () => {
    const data: any[] = [];
    const result = Object.prototype.myGroupBy(data, (item) => item.type);
    expect(result).toEqual({});
  });

  it('should group elements with a custom callback', () => {
    const data = ['apple', 'banana', 'carrot'];
    const result = Object.prototype.myGroupBy(data, (item) => item[0]);
    expect(result).toEqual({
      a: ['apple'],
      b: ['banana'],
      c: ['carrot'],
    });
  });
});
