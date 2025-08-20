import type { ReactNode } from 'react';
import SocialIcons from './SocialIcons';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-white border-t border-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {currentYear} Asher Kilner. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <SocialIcons />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
