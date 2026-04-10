import React from 'react';

const TopBar = ({ 
  title, 
  showBack = false, 
  showSearch = false,
  onBack 
}) => {
  const topBarStyle = {
    width: '100%',
    height: '80px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.03)',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '24px',
    paddingRight: '24px',
    boxSizing: 'border-box',
    position: 'relative',
  };

  const backButtonStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: '#f8fafb',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#3a5fff',
    fontSize: '18px',
    marginRight: '16px',
    transition: 'all 0.2s ease',
  };

  const titleStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#232323',
    margin: '0',
    flex: 1,
  };

  const searchAreaStyle = {
    marginLeft: 'auto',
    width: '200px',
    height: '40px',
    backgroundColor: '#f8fafb',
    borderRadius: '10px',
    border: '1px solid #eceef6',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '12px',
    paddingRight: '12px',
    boxSizing: 'border-box',
  };

  const searchInputStyle = {
    width: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    fontSize: '14px',
    color: '#232323',
  };

  return (
    <div style={topBarStyle}>
      {showBack && (
        <button style={backButtonStyle} onClick={onBack}>
          ←
        </button>
      )}
      <h1 style={titleStyle}>{title}</h1>
      {showSearch && (
        <div style={searchAreaStyle}>
          <input 
            style={searchInputStyle}
            type="text"
            placeholder="Αναζήτηση..."
          />
        </div>
      )}
    </div>
  );
};

export default TopBar;
