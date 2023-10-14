import React from 'react';
import '../css/custom.css';

function error({error}) {
    return (
    <div className="text-red-600">{error}</div>
    )
}

export default error
