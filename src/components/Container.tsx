import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">{children}</div>;
};
