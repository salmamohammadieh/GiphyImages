import Container from '../components/Container';
import Items from '../components/Items';
import React from 'react';
import {StyleSheet, FlatList, Text, Button} from 'react-native';
import {clearFavorites} from '../redux/actions/favoritesActions';
import {useSelector, useDispatch} from 'react-redux';

const FavoriteScreen = () => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(state => state.favorites);

  const pressHandler = () => {
    dispatch(clearFavorites());
  };

  return (
    <Container>
      {favoriteItems.length ? (
        <>
          <Text style={styles.itemscount}>{favoriteItems.length} items</Text>
          <FlatList
            numColumns={2}
            style={styles.list}
            data={favoriteItems}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Items
                title={item.title}
                imageUrl={item.imageUrl}
                id={item.id}
                withFavorites
              />
            )}
          />
          <Button title="clear favorites" onPress={pressHandler} />
        </>
      ) : (
        <Text>You have nothing saved yet</Text>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
  itemscount: {
    fontSize: 18,
  },
});
export default FavoriteScreen;
