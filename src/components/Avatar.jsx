import React from 'react';

const Avatar = ({ initials, size = 44, bgColor = '#3a5fff' }) => {
  const styles = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    backgroundColor: bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Inter', sans-serif",
    fontSize: `${size * 0.36}px`,
    fontWeight: 600,
    color: '#ffffff',
  };

  return <div style={styles}>{initials}</div>;
};

export default Avatar;
