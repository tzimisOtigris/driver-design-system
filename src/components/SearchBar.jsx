import React from 'react';

const SearchBar = ({
  placeholder = 'Αναζήτηση...',
  value,
  onChange,
}) => {
  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f8fafb',
    border: '1px solid #eceef6',
    borderRadius: '12px',
    height: '44px',
    width: '320px',
    paddingLeft: '13px',
    paddingRight: '13px',
    fontFamily: "'Inter', sans-serif",
  };

  const iconStyles = {
    width: '18px',
    height: '18px',
    backgroundColor: '#b0b0b0',
    borderRadius: '50%',
    marginRight: '10px',
    flexShrink: 0,
  };

  const inputStyles = {
    flex: 1,
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '14px',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    color: '#232323',
  };

  return (
    <div style={containerStyles}>
      <div style={iconStyles} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={inputStyles}
      />
    </div>
  );
};

export default SearchBar;
