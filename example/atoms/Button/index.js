import React from 'react'; 

export const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);
Object.assign(Button, { displayName: 'Button' });
