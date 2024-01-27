import Container from '../components/Container';
import ErrorMessage from '../components/Error';
import Items from '../components/Items';
import React, {useState, useEffect, useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {giphy} from '../services/api';

const HomeScreen = ({}) => {
  const [error, setError] = useState('');
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);

  const getItems = async () => {
    try {
      const results = await giphy.get('/trending', {
        params: {
          api_key: 'QnJxr8qqz5EmkGTfJznaBPD1W4oHCinV',
          limit: '20',
          offset: offset,
        },
      });
      setItems([...items, ...results.data.data]);
      setOffset(prevOffset => prevOffset + 20);
      setError('');
    } catch (err) {
      setError('An error occured please try later');
    }
  };

  useEffect(() => {
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = useCallback(
    ({item}) => {
      return (
        <Items
          title={item.title}
          description={item.username}
          imageUrl={item.images?.fixed_width_downsampled?.url}
          id={item.id}
          withFavorites
          slug={item.slug}
          type={item.type}
          ur={item.url}
        />
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items],
  );

  const onEndReached = () => {
    if (offset === 60) {
      return;
    }
    getItems();
  };

  return (
    <Container>
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <FlatList
          style={styles.list}
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          onEndReached={onEndReached}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
});
export default HomeScreen;
