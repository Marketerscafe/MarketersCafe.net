import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description?: string;
  badge?: string;
  number?: string;
  children?: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export function Card({
  title,
  description,
  badge,
  number,
  children,
  className = '',
  hoverEffect = true,
  onClick,
}: CardProps) {
  const isClickable = !!onClick;
  
  return (
    <div 
      className={`card ${hoverEffect ? 'card-hover' : ''} ${isClickable ? 'card-clickable' : ''} ${className}`}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
    >
      <div className="card-inner">
        <div className="card-header-area">
          {number && <span className="card-number">{number}</span>}
          {badge && <span className="card-badge">{badge}</span>}
        </div>
        <div className="card-body-area">
          <h3 className="card-title">{title}</h3>
          {description && <p className="card-description">{description}</p>}
          {children}
        </div>
      </div>
      <div className="card-border-glow"></div>
    </div>
  );
}
export default Card;
