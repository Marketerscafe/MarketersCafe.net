import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'text';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({ variant = 'solid', children, icon, className = '', ...props }: ButtonProps) {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      <span className="btn-content">
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </span>
      {variant !== 'text' && <span className="btn-glow-border"></span>}
    </button>
  );
}
export default Button;
