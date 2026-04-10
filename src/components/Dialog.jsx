import React from 'react';

const DialogCard = ({ 
  title, 
  description, 
  cancelLabel = 'Ακύρωση', 
  confirmLabel = 'Επιβεβαίωση',
  onCancel,
  onConfirm 
}) => {
  const cardStyle = {
    width: '480px',
    height: '260px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0px 16px 40px 0px rgba(0, 0, 0, 0.15)',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    position: 'relative',
  };

  const iconCircleStyle = {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 152, 52, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '24px',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#ff9834',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#232323',
    margin: '16px 0 8px 0',
    textAlign: 'center',
    padding: '0 40px',
  };

  const descriptionStyle = {
    fontSize: '14px',
    fontWeight: '400',
    color: '#b0b0b0',
    margin: '0',
    textAlign: 'center',
    padding: '0 40px',
    lineHeight: '1.5',
  };

  const buttonsContainerStyle = {
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
    justifyContent: 'center',
  };

  const cancelButtonStyle = {
    width: '200px',
    height: '40px',
    backgroundColor: '#f8fafb',
    border: '1px solid #eceef6',
    color: '#232323',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  const confirmButtonStyle = {
    width: '200px',
    height: '40px',
    backgroundColor: '#3a5fff',
    border: 'none',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0px 8px 12px 0px rgba(135, 145, 233, 0.3)',
    transition: 'all 0.2s ease',
  };

  return (
    <div style={cardStyle}>
      <div style={iconCircleStyle}>!</div>
      <h2 style={titleStyle}>{title}</h2>
      <p style={descriptionStyle}>{description}</p>
      <div style={buttonsContainerStyle}>
        <button style={cancelButtonStyle} onClick={onCancel}>
          {cancelLabel}
        </button>
        <button style={confirmButtonStyle} onClick={onConfirm}>
          {confirmLabel}
        </button>
      </div>
    </div>
  );
};

const Dialog = ({ 
  title, 
  description, 
  cancelLabel, 
  confirmLabel,
  onCancel,
  onConfirm 
}) => {
  const overlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1000',
  };

  return (
    <div style={overlayStyle}>
      <DialogCard 
        title={title} 
        description={description}
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </div>
  );
};

export { Dialog, DialogCard };
