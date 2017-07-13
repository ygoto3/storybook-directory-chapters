import React from 'react'; 

export const AnotherList = ({ children }) => (
  <ol>{children}</ol>
);
Object.assign(AnotherList, { displayName: 'AnotherList' });

export const AnotherListItem = ({ children }) => (
  <li>{children}</li>
);
Object.assign(AnotherListItem, { displayName: 'AnotherListItem' });
