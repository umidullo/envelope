import React from 'react';
import './Card.css';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
}) => {
  return (
    <div className={clsx('card', `card-${variant}`, className)}>
      {children}
    </div>
  );
};
