import React from 'react'; 

export const List = ({ children }) => (
  <ul>{children}</ul>
);
Object.assign(List, { displayName: 'List' });

export const ListItem = ({ children }) => (
  <li>{children}</li>
);
Object.assign(ListItem, { displayName: 'ListItem' });
