import { cleanup, render, act } from '@testing-library/react';
import Spinner, { getD } from './Spinner';
import { existsSync } from 'fs';
import { join as pathJoin } from 'path';

afterEach(cleanup);

describe('Build output exist test', () => {
  expect(existsSync(pathJoin(__dirname, '../lib/Spinner.js'))).toEqual(true);
  expect(existsSync(pathJoin(__dirname, '../lib/Spinner.d.ts'))).toEqual(true);
});

describe('getD test', () => {
  function getxyNotFill(dValue: string): number[] {
    // Expected D value is like this: M 50 50-r a r r .. .. .. x y M 50 50 Z.
    return dValue.split(' ').slice(9, 11).map((value) => { return Number.parseFloat(value); });
  }
  function getxyFill(dValue: string): number[] {
    // Expected D value is like this: M 50 50 l 0 -r a r r .. .. .. x y M 50 50 Z.
    return dValue.split(' ').slice(12, 14).map((value) => { return Number.parseFloat(value); });
  }
  let received: string | number[] = '';
  test('Test 1', () => {
    /** 
     * Expected value: 
     * M 50 10 
     * a 40 40 0 1 0 0 0 
     * M 50 50 Z
     */
    received = getD(false, false, 0);
    expect(received).toContain('M 50 10 a 40 40 0 1 0');
    expect(getxyNotFill(received)).toEqual([0, 0]);
  });

  test('Test 2', () => {
    /**
     * Expected value: 
     * M 50 10 
     * a 40 40 0 0 1 0 0 
     * M 50 50 Z
     */
    received = getD(true, false, 0);
    expect(received).toContain('M 50 10 a 40 40 0 0 1');
    expect(getxyNotFill(received)).toEqual([0, 0]);
  });

  test('Test 3', () => {
    /**
     * Expected value: 
     * M 50 50
     * l 0 -40 
     * a 40 40 0 0 1 0 0 
     * M 50 50 Z
     */
    received = getD(true, true, 0);
    expect(received).toContain('M 50 50 l 0 -40 a 40 40 0 0 1');
    expect(getxyFill(received)).toEqual([0, 0]);
  });

  test('Test 4', () => {
    /**
     * Expected x and y value:
     * x: r * sin(210°)
     * y: r * (1 - cos(210°))
     */
    received = getxyNotFill(getD(false, false, 210));
    let expected = [-20, 40 * (1 + Math.sqrt(3) / 2)];
    expect(Math.abs(received[0] - expected[0])).toBeLessThan(0.1);
    expect(Math.abs(received[1] - expected[1])).toBeLessThan(0.1);
  });

  test('Test 5', () => {
    /**
     * Expected x and y value:
     * x: r * sin(210°)
     * y: r * (1 - cos(210°))
     */
    received = getxyNotFill(getD(true, false, 210));
    let expected = [-20, 40 * (1 + Math.sqrt(3) / 2)];
    expect(Math.abs(received[0] - expected[0])).toBeLessThan(0.1);
    expect(Math.abs(received[1] - expected[1])).toBeLessThan(0.1);
  });

  test('Test 6', () => {
    /**
     * Expected x and y value:
     * x: r * sin(120°)
     * y: r * (1 - cos(120°))
     */
    received = getxyFill(getD(true, true, 120));
    let expected = [40 * Math.sqrt(3) / 2, 40 * (1 + 1 / 2)];
    expect(Math.abs(received[0] - expected[0])).toBeLessThan(0.1);
    expect(Math.abs(received[1] - expected[1])).toBeLessThan(0.1);
  });
});

test('Render single color test', () => {
  const colors = ['#222'];
  const { container } = render(<Spinner fill={false} colors={colors} />);
  expect(container.querySelector('svg')).toBeInTheDocument();

  const paths = container.querySelectorAll('path')

  // Only one path exists.
  expect(paths).toHaveLength(1);
  expect(paths[0]).toHaveAttribute('stroke', colors[0]);

  // Have default width of 4.
  expect(paths[0]).toHaveAttribute('stroke-width', '4');
});

test('Render two colors test', () => {
  jest.useFakeTimers();
  const colors = ['#333', '#999'];
  const { container } = render(<Spinner fill={false} colors={colors} width={'10'} />);
  expect(container.querySelector('svg')).toBeInTheDocument();

  const paths = container.querySelectorAll('path')

  // Two paths exist.
  expect(paths).toHaveLength(2);

  // Each path should have a corresponding color.
  expect(paths[0]).toHaveAttribute('stroke', colors[0]);
  expect(paths[1]).toHaveAttribute('stroke', colors[1]);

  // Each path should have different color after sufficient time passes.
  act(() => {
    jest.advanceTimersToNextTimer(120);
  })
  expect(paths[0]).toHaveAttribute('stroke', colors[1]);
  expect(paths[1]).toHaveAttribute('stroke', colors[0]);

  // Have width of 10.
  expect(paths[0]).toHaveAttribute('stroke-width', '10');
  expect(paths[1]).toHaveAttribute('stroke-width', '10');
});
