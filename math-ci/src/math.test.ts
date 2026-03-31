import { describe, it, expect } from 'vitest';
import {
  add,
  subtract,
  multiply,
  divide,
  factorial,
  power,
  average,
  clamp,
  quadratic,
} from './math';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });
});

describe('subtract', () => {
  it('subtracts two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });
});

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(3, 7)).toBe(21);
  });

  it('returns zero when multiplied by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe('divide', () => {
  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('returns null for division by zero', () => {
    expect(divide(10, 0)).toBeNull();
  });
});

describe('factorial', () => {
  it('computes factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });

  it('returns 1 for factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('returns null for negative input', () => {
    expect(factorial(-3)).toBeNull();
  });
});

describe('power', () => {
  it('raises a base to a positive exponent', () => {
    expect(power(2, 3)).toBe(8);
  });

  it('returns 1 for any base to exponent 0', () => {
    expect(power(5, 0)).toBe(1);
  });
});

describe('average', () => {
  it('returns arithmetic mean for a list', () => {
    expect(average([2, 4, 6])).toBe(4);
  });

  it('returns null for an empty array', () => {
    expect(average([])).toBeNull();
  });
});

describe('clamp', () => {
  it('returns min when value is below range', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it('returns max when value is above range', () => {
    expect(clamp(150, 0, 100)).toBe(100);
  });

  it('returns the value when it is in range', () => {
    expect(clamp(3, 0, 100)).toBe(3);
  });
});

describe('quadratic', () => {
  it('returns two real roots when discriminant is positive', () => {
    expect(quadratic(1, -5, 6)).toEqual([3, 2]);
  });

  it('returns repeated real roots when discriminant is zero', () => {
    expect(quadratic(1, -2, 1)).toEqual([1, 1]);
  });

  it('returns null when discriminant is negative', () => {
    expect(quadratic(1, 0, 1)).toBeNull();
  });
});
