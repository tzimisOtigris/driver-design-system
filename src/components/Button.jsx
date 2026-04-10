import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  onClick,
  disabled = false,
  fullWidth = false,
}) => {
  const baseStyles = {
    fontFamily: "'Inter', sans-serif",
    borderRadius: '12px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: 600,
    transition: 'all 0.2s ease',
    opacity: disabled ? 0.6 : 1,
  };

  let sizeStyles = {};
  let variantStyles = {};

  // Size variants
  if (size === 'large') {
    sizeStyles = {
      height: '52px',
      fontSize: '16px',
      padding: '0 24px',
    };
  } else if (size === 'small') {
    sizeStyles = {
      height: '34px',
      fontSize: '13px',
      padding: '0 16px',
    };
  } else {
    // default
    sizeStyles = {
      height: '48px',
      fontSize: '15px',
      padding: '0 20px',
    };
  }

  // Variant styles
  if (variant === 'primary') {
    variantStyles = {
      backgroundColor: '#3a5fff',
      color: '#ffffff',
      boxShadow: '0px 8px 12px 0px rgba(135, 145, 233, 0.3)',
    };
  } else if (variant === 'secondary') {
    variantStyles = {
      backgroundColor: 'rgba(46, 204, 113, 0.1)',
      color: '#2ecc71',
      border: '1px solid #2ecc71',
    };
  } else if (variant === 'ghost') {
    variantStyles = {
      backgroundColor: 'rgba(58, 95, 255, 0.08)',
      color: '#3a5fff',
    };
  }

  const finalStyles = {
    ...baseStyles,
    ...sizeStyles,
    ...variantStyles,
    width: fullWidth ? '100%' : 'auto',
  };

  return (
    <button style={finalStyles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
