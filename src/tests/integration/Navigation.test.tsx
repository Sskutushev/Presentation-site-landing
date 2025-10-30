import { render, screen } from '@testing-library/react';
import { Header } from '../../components/sections/0_Header';
import { vi } from 'vitest';

// Mock react-scroll to avoid issues with smooth scrolling in tests
vi.mock('react-scroll', () => ({
  Link: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
    <a data-testid="mock-link" {...props}>
      {children}
    </a>
  ),
}));

describe('Navigation Integration', () => {
  it('renders navigation items in header', () => {
    render(<Header />);

    const navItems = ['Проблема', 'Решение', 'UPA Engine', 'Статус', 'Roadmap', 'Контакт'];

    navItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('header contains logo link', () => {
    render(<Header />);

    const logoLink = screen.getByRole('link');
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '#hero'); // Using hash since react-scroll uses this internally
  });

  it('mobile menu button appears on smaller screens', () => {
    render(<Header />);

    // Mobile menu button should be present
    const mobileMenuButton = screen.getByRole('button');
    expect(mobileMenuButton).toBeInTheDocument();
  });
});
