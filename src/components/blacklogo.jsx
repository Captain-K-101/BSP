import React from 'react';

const BlackLogoWithText = ({ logoHeight = 80, textHeight = 150 }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      src="/logo/blacklogo.png"
      alt="Black Pebble Logo"
      style={{ height: logoHeight }}
    />
    <a href="/" style={{ marginLeft: '10px' }}>
    <img
      src="/logo/blacktext.png"
      alt="Black Text"
      style={{ height: textHeight }}
    />
      </a>
  </div>

);

export default BlackLogoWithText;