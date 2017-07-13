import React from 'react'; 
import { PortalTemplate } from '../../templates/PortalTemplate';

const data = {
  contents: 'Portal with actual contents',
};

export const Portal = () => (
  <PortalTemplate data={data} />
);
Object.assign(Portal, { displayName: 'Portal' });
