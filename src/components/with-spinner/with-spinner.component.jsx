import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

// Following is a HOC
const WithSpinner = WrapperComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpinner;
