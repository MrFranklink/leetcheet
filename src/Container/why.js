import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function CustomCardBod({ text, backgroundColor }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    margin: '20px',
    backgroundColor: backgroundColor || 'white',
    transform: isHovered ? 'scale(1.02)' : 'scale(1)', 
    zIndex: isHovered ? 1 : 0, 
    transition: 'transform 0.3s, z-index 0.3s', 
  };

  const boldTextStyle = {
    fontWeight: '600',
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (text && text.trim() !== '') {
    return (
      <Card
        body
        style={cardStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div style={boldTextStyle}>{text}</div>
      </Card>
    );
  }

  return null;
}

export default CustomCardBod;
