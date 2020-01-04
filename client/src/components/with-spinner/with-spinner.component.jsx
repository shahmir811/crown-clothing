import React from 'react';

import Spinner from '../spinner/spinner.component';

// Following is a HOC
const WithSpinner = WrapperComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrapperComponent {...otherProps} />;
};

export default WithSpinner;
