import ItemDetails from '../components/ItemDetails';
import React from 'react';

const ItemsDetailsScreen = ({route}) => {
  const {id, imageUrl, slug, title, type, url, description} = route.params;

  return (
    <ItemDetails
      title={title}
      imageUrl={imageUrl}
      description={description}
      url={url}
      type={type}
      slug={slug}
      id={id}
    />
  );
};

export default ItemsDetailsScreen;
