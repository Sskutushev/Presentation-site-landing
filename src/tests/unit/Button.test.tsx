import { render, screen } from '@testing-library/react';
import { Button } from '../../components/common/Button';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('Button Component', () => {
  const user = userEvent.setup();

  it('renders button with children', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(<Button variant="primary">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-c-primary');

    rerender(<Button variant="secondary">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-c-bg-secondary');

    rerender(<Button variant="outline">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('border');

    rerender(<Button variant="gradient">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-gradient-to-r');
  });

  it('applies loading state correctly', () => {
    render(<Button loading={true}>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument(); // Loader icon
  });

  it('applies disabled state correctly', () => {
    render(<Button disabled={true}>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
