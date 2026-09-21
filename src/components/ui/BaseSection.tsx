import React, { ReactNode } from 'react';

interface BaseSectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'transparent' | 'glass' | 'dark';
  containerClassName?: string;
  id?: string;
}

/**
 * BaseSection acts as the "Super Class" for all sections.
 * It ensures consistent padding, max-width constraints, and background behaviors.
 */
export default function BaseSection({
  children,
  className = '',
  variant = 'default',
  containerClassName = '',
  id,
}: BaseSectionProps) {
  
  // Determine background/behavior based on variant
  const variantStyles = {
    default: 'bg-transparent',
    transparent: 'bg-transparent',
    glass: 'glass-panel', // using the custom utility we defined in globals.css
    dark: 'bg-black/50',
  };

  const bgStyle = variantStyles[variant];

  const hasPaddingY = className.includes('py-') || className.includes('pt-') || className.includes('pb-');
  const defaultPaddingY = hasPaddingY ? '' : 'py-12 md:py-20';

  return (
    <section 
      id={id}
      className={`w-full flex flex-col items-center justify-center relative ${bgStyle} ${defaultPaddingY} ${className}`}
    >
      {/* Inner container for max-width and consistent horizontal padding */}
      <div className={`w-full max-w-7xl flex flex-col items-center ${containerClassName.includes('px-') ? '' : 'px-4 md:px-12'} ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
