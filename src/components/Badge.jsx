import React from 'react';

const Badge = ({ variant = 'available', label }) => {
  const baseStyles = {
    fontFamily: "'Inter', sans-serif",
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
  };

  let variantStyles = {};
  let defaultLabel = label;

  if (variant === 'active') {
    variantStyles = {
      backgroundColor: 'rgba(255, 152, 52, 0.12)',
      color: '#ff9834',
      borderRadius: '8px',
      padding: '8px 10px',
      fontSize: '12px',
      fontWeight: 600,
    };
    defaultLabel = label || 'Ενεργή';
  } else if (variant === 'available') {
    variantStyles = {
      backgroundColor: 'rgba(46, 204, 113, 0.1)',
      color: '#2ecc71',
      borderRadius: '6px',
      padding: '8px 10px',
      fontSize: '11px',
      fontWeight: 500,
    };
    defaultLabel = label || 'Διαθέσιμη';
  } else if (variant === 'completed') {
    variantStyles = {
      backgroundColor: 'rgba(138, 96, 255, 0.1)',
      color: '#8a60ff',
      borderRadius: '6px',
      padding: '8px 10px',
      fontSize: '11px',
      fontWeight: 500,
    };
    defaultLabel = label || 'Ολοκληρωμένη';
  }

  const finalStyles = {
    ...baseStyles,
    ...variantStyles,
  };

  return <span style={finalStyles}>{defaultLabel}</span>;
};

export default Badge;
