import React from 'react'; 
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';

export const PortalTemplate = ({ data }) => (
  <div>
    <Header />
      {data.contents}
    <Footer />
  </div>
);
Object.assign(PortalTemplate, { displayName: 'PortalTemplate' });
