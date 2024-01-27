import React, {useState, useEffect} from 'react';
import ItemDetails from '../components/itemdetails';
import {giphy} from '../utils/api';
import ErrorMessage from '../components/error';

const ItemsDetailsScreen = ({route}) => {
  const itemId = route.params.id;
  const [item, setItem] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getItem() {
      try {
        const result = await giphy.get(`${itemId}`, {
          params: {
            api_key: 'QnJxr8qqz5EmkGTfJznaBPD1W4oHCinV',
          },
        });
        setItem(result.data.data);
        setError('');
      } catch (err) {
        setError('An error occured try later');
      }
    }
    getItem();
  }, [itemId]);

  return error ? (
    <ErrorMessage error={error} />
  ) : (
    <ItemDetails
      title={item.title}
      imageUrl={item.images?.fixed_width_downsampled?.url}
      description={item.username}
      url={item.url}
      type={item.type}
      slug={item.slug}
      id={item.id}
    />
  );
};

export default ItemsDetailsScreen;
