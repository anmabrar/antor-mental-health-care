import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-info text-white">{children}</button>
    );
};

export default PrimaryButton;