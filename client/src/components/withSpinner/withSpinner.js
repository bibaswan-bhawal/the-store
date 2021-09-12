import React from 'react';

import './withSpinner.scss';

const withSpinner = WrappedComponent => ({ isLoading, ...otherprops }) => {
    return isLoading ? (
        <div className="spinner-overlay">
            <div className="spinner-container"></div>
        </div>
    ) : (<WrappedComponent {...otherprops} />);
}

export default withSpinner;