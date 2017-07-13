import React from 'react'; 
import { TextBlock } from '../../atoms/TextBlock';

export const Header = ({ children, onClick }) => (
  <section style={{ background: '#777777' }}>
    <TextBlock>Header: storybook-directory-chapters</TextBlock>
  </section>
);
Object.assign(Header, { displayName: 'Header' });
