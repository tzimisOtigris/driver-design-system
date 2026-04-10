import React from 'react';

const StatCard = ({ type = 'total', value, label }) => {
  const accentColors = {
    total: '#3a5fff',
    active: '#ff9834',
    available: '#2ecc71',
    completed: '#8a60ff',
  };

  const accentColor = accentColors[type] || accentColors.total;

  const cardStyle = {
    width: '296px',
    height: '130px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0px 8px 24px 0px rgba(220, 224, 249, 0.3)',
    padding: '0',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  };

  const iconCircleStyle = {
    position: 'absolute',
    top: '24px',
    left: '24px',
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    backgroundColor: accentColor,
    opacity: 0.08,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const iconDotStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: accentColor,
    opacity: 0.6,
  };

  const valueStyle = {
    position: 'absolute',
    top: '24px',
    left: '92px',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#232323',
    margin: '0',
  };

  const labelStyle = {
    position: 'absolute',
    top: '65px',
    left: '92px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#b0b0b0',
    margin: '0',
  };

  const accentLineStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    height: '4px',
    backgroundColor: accentColor,
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
  };

  return (
    <div style={cardStyle}>
      <div style={iconCircleStyle}>
        <div style={iconDotStyle} />
      </div>
      <div style={valueStyle}>{value}</div>
      <div style={labelStyle}>{label}</div>
      <div style={accentLineStyle} />
    </div>
  );
};

export default StatCard;
