import React from 'react';

const Logo = () => {
  const containerStyles = {
    width: '66px',
    height: '44px',
    backgroundColor: '#3a5fff',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  const textStyles = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '18px',
    fontWeight: 700,
    color: '#ffffff',
  };

  return (
    <div style={containerStyles}>
      <span style={textStyles}>Driver</span>
    </div>
  );
};

export default Logo;
