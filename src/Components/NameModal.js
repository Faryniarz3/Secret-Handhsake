import React, { useState } from 'react';

function NameModal({ onSave, onCancel }) {
  const [name, setName] = useState('');

  const handleSave = () => {
    onSave(name);
    setName(''); // Clear the input after saving
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
        <h2>Enter a name for your handshake</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default NameModal;
