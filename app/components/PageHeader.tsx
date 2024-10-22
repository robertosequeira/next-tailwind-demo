import React from 'react';

interface PageHeaderProps {
  children: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          {children}
        </h1>
      </div>
    </header>
  );
};

export default PageHeader;
