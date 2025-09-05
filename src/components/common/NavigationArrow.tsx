import React from 'react';

interface NavigationArrowProps {
  direction: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const NavigationArrow: React.FC<NavigationArrowProps> = ({
  direction,
  onClick,
  disabled = false,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center w-12 h-12 
        bg-neutral-100 hover:bg-neutral-200 
        disabled:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-50
        rounded-full transition-colors duration-200
        ${className}
      `}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d={direction === 'left' ? "M15 18L9 12L15 6" : "M9 18L15 12L9 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default NavigationArrow;