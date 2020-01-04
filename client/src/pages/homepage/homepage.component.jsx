import React from 'react';

import { HomepageContainer } from './homepage.styles';
import Directory from '../../components/directory/directory.component';

const Homepage = () => {
  // throw Error;
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};

export default Homepage;
