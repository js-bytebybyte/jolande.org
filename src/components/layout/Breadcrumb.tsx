'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const pathNames: Record<string, string> = {
  '/': 'BLOG',
  '/projects': 'PROJECTS',
  '/about': 'ABOUT',
  '/contact': 'CONTACT',
};

export default function Breadcrumb() {
  const pathname = usePathname();

  const currentPageName = pathNames[pathname] || 'PAGE';

  return (
    <nav className="mb-8 text-sm text-muted-foreground">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="hover:text-foreground transition-colors"
          >
            HOME
          </Link>
        </li>
        {pathname !== '/' && (
          <>
            <li>
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="text-foreground font-medium">
              {currentPageName}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}
