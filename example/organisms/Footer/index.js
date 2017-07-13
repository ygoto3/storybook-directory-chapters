import React from 'react'; 
import { TextBlock } from '../../atoms/TextBlock';

export const Footer = ({ children, onClick }) => (
  <section style={{ background: '#aaaaaa' }}>
    <TextBlock>Footer</TextBlock>
  </section>
);
Object.assign(Footer, { displayName: 'Footer' });
