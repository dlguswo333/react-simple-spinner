import { cleanup, render, act } from '@testing-library/react';
import Spinner, { getD } from './Spinner';

afterEach(cleanup);

test('Render single color test', () => {
  const colors = ['#222'];
  const { container } = render(<Spinner fill={false} colors={colors} />);
  expect(container.querySelector('svg')).toBeInTheDocument();

  const paths = container.querySelectorAll('path')

  // Only one path exists.
  expect(paths).toHaveLength(1);
  expect(paths[0]).toHaveAttribute('stroke', colors[0]);
});

test('Render two colors test', () => {
  jest.useFakeTimers();
  const colors = ['#333', '#999'];
  const { container } = render(<Spinner fill={false} colors={colors} />);
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
  jest.useRealTimers();
});
