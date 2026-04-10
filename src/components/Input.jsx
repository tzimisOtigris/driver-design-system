import React from 'react';

const Input = ({
  label,
  placeholder = '',
  value,
  onChange,
  disabled = false,
  type = 'text',
}) => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyles = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '13px',
    fontWeight: 500,
    color: '#232323',
    marginBottom: '8px',
  };

  const inputStyles = {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#f8fafb',
    border: '1px solid #eceef6',
    borderRadius: '12px',
    height: '48px',
    paddingLeft: '15px',
    fontSize: '14px',
    fontWeight: 400,
    color: '#232323',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    opacity: disabled ? 0.6 : 1,
  };

  const [isFocused, setIsFocused] = React.useState(false);

  const finalInputStyles = {
    ...inputStyles,
    borderColor: isFocused ? '#3a5fff' : '#eceef6',
  };

  return (
    <div style={containerStyles}>
      {label && <label style={labelStyles}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={finalInputStyles}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default Input;
