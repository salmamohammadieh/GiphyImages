import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import Container from './container';
import FavoriteIcon from './favoriteIcon';
import useFavoriteActions from '../hooks/useFavoriteActions';
import useFavoriteCheck from '../hooks/useFavoriteCheck';

const ItemDetails = ({title, imageUrl, slug, type, url, description, id}) => {
  const isSaved = useFavoriteCheck(id);
  const {handleToggleFavorite} = useFavoriteActions();

  return (
    <Container>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.meta}>
        <Text style={styles.type}>type: {type}</Text>
        <Text style={styles.description}> | {description}</Text>
        <FavoriteIcon
          status={isSaved}
          onPress={() => {
            handleToggleFavorite(isSaved, id, title, imageUrl);
          }}
        />
      </View>
      {imageUrl && (
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
      )}
      <Text style={styles.content}>{slug}</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  meta: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  type: {
    fontSize: 18,
    color: '#999',
    marginRight: 10,
  },
  description: {
    fontSize: 18,
    color: '#999',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    marginTop: 20,
  },
});
export default ItemDetails;
