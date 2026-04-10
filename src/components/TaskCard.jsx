import React from 'react';

const TaskCard = ({ 
  title, 
  date, 
  route, 
  variant = 'dashboard', 
  selected = false,
  onStart 
}) => {
  const isDashboard = variant === 'dashboard';

  const cardStyle = {
    backgroundColor: '#f8fafb',
    borderRadius: isDashboard ? '12px' : '14px',
    height: isDashboard ? '80px' : '110px',
    width: '100%',
    padding: isDashboard ? '16px' : '16px',
    boxSizing: 'border-box',
    border: selected && !isDashboard ? '2px solid #3a5fff' : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  };

  const statusDotStyle = {
    position: 'absolute',
    top: isDashboard ? '12px' : '16px',
    left: isDashboard ? '16px' : '16px',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#2ecc71',
  };

  const badgeStyle = !isDashboard ? {
    position: 'absolute',
    top: '16px',
    right: '16px',
    backgroundColor: '#2ecc71',
    color: '#ffffff',
    fontSize: '10px',
    fontWeight: '600',
    padding: '4px 8px',
    borderRadius: '4px',
  } : {};

  const contentStyle = {
    marginLeft: isDashboard ? '24px' : '24px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  };

  const titleStyle = {
    fontSize: '15px',
    fontWeight: '600',
    color: isDashboard ? '#232323' : '#3a5fff',
    margin: '0 0 4px 0',
  };

  const dateStyle = {
    fontSize: '12px',
    fontWeight: '400',
    color: '#b0b0b0',
    margin: '0 0 4px 0',
  };

  const routeStyle = {
    fontSize: '12px',
    fontWeight: '400',
    color: '#8a8da5',
    margin: '0',
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '1px solid #3a5fff',
    color: '#3a5fff',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  return (
    <div style={cardStyle}>
      <div style={statusDotStyle} />
      {!isDashboard && <div style={badgeStyle}>Διαθέσιμη</div>}
      <div style={contentStyle}>
        <div style={titleStyle}>{title}</div>
        <div style={dateStyle}>{date}</div>
        <div style={routeStyle}>{route}</div>
      </div>
      <button style={buttonStyle} onClick={onStart}>
        Έναρξη
      </button>
    </div>
  );
};

export default TaskCard;
