import React from 'react'; 

export const TextBox = ({ children, onChange, ...otherProps }) => (
  <input type="text" defaultValue={children} {...otherProps} />
);
Object.assign(TextBox, { displayName: 'TextBox' });
