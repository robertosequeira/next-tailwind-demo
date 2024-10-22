import React from 'react';

interface PageContentProps {
  children: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
};

export default PageContent;
