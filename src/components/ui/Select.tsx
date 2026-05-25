import React from 'react';
import './Select.css';
import clsx from 'clsx';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, fullWidth, options, className, ...props }, ref) => {
    return (
      <div className={clsx('select-wrapper', fullWidth && 'select-full-width')}>
        {label && <label className="select-label">{label}</label>}
        <select
          ref={ref}
          className={clsx('select', error && 'select-error', className)}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className="select-error-message">{error}</span>}
      </div>
    );
  }
);

Select.displayName = 'Select';
