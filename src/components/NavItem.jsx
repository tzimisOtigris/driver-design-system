import React from 'react';

const NavItem = ({ active = false, icon, onClick }) => {
  const buttonStyle = {
    width: '52px',
    height: '52px',
    borderRadius: '12px',
    backgroundColor: active ? '#3a5fff' : '#f8fafb',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: active ? '0px 8px 12px 0px rgba(135, 145, 233, 0.3)' : 'none',
    transition: 'all 0.2s ease',
    fontSize: '24px',
    color: active ? '#ffffff' : '#8a8da5',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {icon}
    </button>
  );
};

export default NavItem;
