import React from 'react';
import { clsx } from 'clsx';

interface ProjectLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * ProjectLayout component
 * Provides the main structure for the application.
 * Smooth scrolling is enabled globally via globals.css.
 */
export const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children, className }) => {
  return (
    <div className={clsx("min-h-screen bg-background font-sans antialiased", className)}>
      <main className="relative flex flex-col min-h-screen">
        {children}
      </main>
    </div>
  );
};
