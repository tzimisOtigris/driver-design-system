import React from 'react';

const StopCard = ({ 
  type = 'origin', 
  name, 
  address, 
  showConnector = false,
  selected = false 
}) => {
  const dotColor = type === 'origin' ? '#2ecc71' : '#3a5fff';
  const label = type === 'origin' ? 'Αφετηρία' : 'Στάση';

  const cardStyle = {
    backgroundColor: '#f8fafb',
    borderRadius: '14px',
    height: '112px',
    width: '432px',
    padding: '16px',
    boxSizing: 'border-box',
    border: selected ? '2px solid #3a5fff' : '1px solid #eceef6',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#232323',
    margin: '0',
  };

  const dotStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: dotColor,
    flexShrink: 0,
  };

  const nameStyle = {
    fontSize: '13px',
    fontWeight: '500',
    color: '#b0b0b0',
    margin: '0 0 4px 0',
  };

  const addressStyle = {
    fontSize: '13px',
    fontWeight: '400',
    color: '#8a8da5',
    margin: '0',
  };

  const connectorStyle = showConnector ? {
    position: 'absolute',
    bottom: '-16px',
    left: '24px',
    width: '2px',
    height: '16px',
    backgroundColor: '#eceef6',
  } : {};

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <div style={dotStyle} />
        <p style={labelStyle}>{label}</p>
      </div>
      <div>
        <p style={nameStyle}>Όνομα: {name}</p>
        <p style={addressStyle}>{address}</p>
      </div>
      {showConnector && <div style={connectorStyle} />}
    </div>
  );
};

export default StopCard;
