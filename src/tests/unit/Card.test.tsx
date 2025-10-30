import { render, screen } from '@testing-library/react';
import { Card } from '../../components/common/Card';

describe('Card Component', () => {
  it('renders card with children', () => {
    render(<Card>Card content</Card>);
    const card = screen.getByText(/card content/i);
    expect(card).toBeInTheDocument();
  });

  it('applies className prop correctly', () => {
    render(<Card className="custom-class">Card content</Card>);
    const card = screen.getByTestId('card-container');
    expect(card).toHaveClass('custom-class');
  });

  it('renders with default styles', () => {
    render(<Card>Card content</Card>);
    const card = screen.getByTestId('card-container');
    expect(card).toHaveClass('bg-c-bg-secondary');
    expect(card).toHaveClass('border');
    expect(card).toHaveClass('border-c-border');
  });
});
