import React from 'react';
import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = props => {
  const { title, items } = props;

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {/* Following code will execute only 4 items not all */}
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherCollectionItems }) => (
            <CollectionItem key={id} {...otherCollectionItems} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
