import React from 'react';

import './collection-preview.scss';

const CollectionPreview = ({ title }) => (
    <div className='collection-preview'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <div className='preview'>

        </div>
    </div>
);

export default CollectionPreview;