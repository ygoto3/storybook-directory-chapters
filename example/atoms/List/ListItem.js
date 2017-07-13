import React from 'react'; 

export const ListItem = ({ children }) => (
  <li>{children}</li>
);

Object.assign(ListItem, { displayName: 'ListItem' });
