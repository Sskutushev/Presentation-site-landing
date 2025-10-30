import { render, screen } from '@testing-library/react';
import { Header } from '../../components/sections/0_Header';
import { vi } from 'vitest';
import * as i18n from 'react-i18next';

// Mock react-scroll to avoid issues with smooth scrolling in tests
vi.mock('react-scroll', () => ({
  Link: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
    <a data-testid="mock-link" {...props}>
      {children}
    </a>
  ),
}));

// Mock useTranslation
vi.mock('react-i18next', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useTranslation: () => {
      return {
        t: (key: string) => {
          switch (key) {
            case 'header.problem':
              return 'Problem';
            case 'header.solution':
              return 'Solution';
            case 'header.upa':
              return 'UPA Engine';
            case 'header.status':
              return 'Status';
            case 'header.roadmap':
              return 'Roadmap';
            case 'header.contact':
              return 'Contact';
            default:
              return key;
          }
        },
        i18n: {
          changeLanguage: vi.fn(),
          language: 'en',
        },
      };
    },
  };
});

describe('Navigation Integration', () => {
  it('renders navigation items in header', () => {
    render(<Header />);

    const navItems = ['Problem', 'Solution', 'UPA Engine', 'Status', 'Roadmap', 'Contact'];

    navItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('header contains logo link', () => {
    render(<Header />);

    const logoLink = screen.getByTestId('mock-link');
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('to', 'hero'); // Using 'to' prop from react-scroll mock
  });

  it('mobile menu button appears on smaller screens', () => {
    render(<Header />);

    // Mobile menu button should be present
    const mobileMenuButton = screen.getByTestId('mobile-menu-button');
    expect(mobileMenuButton).toBeInTheDocument();
  });
});
