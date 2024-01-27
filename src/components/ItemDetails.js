import Container from './Container';
import FavoriteIcon from './FavoriteIcon';
import React from 'react';
import useFavoriteActions from '../hooks/useFavoriteActions';
import useFavoriteCheck from '../hooks/useFavoriteCheck';
import {Text, Image, View, StyleSheet} from 'react-native';

const ItemDetails = ({title, imageUrl, slug, type, url, description, id}) => {
  const isSaved = useFavoriteCheck(id);
  const {handleToggleFavorite} = useFavoriteActions();

  return (
    <Container>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.meta}>
        <Text style={styles.type}>type: {type}</Text>
        <Text style={styles.description}> | {description}</Text>
        <View style={styles.favoriteIcon}>
          <FavoriteIcon
            status={isSaved}
            onPress={() => {
              handleToggleFavorite(isSaved, id, title, imageUrl);
            }}
          />
        </View>
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
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  type: {
    color: '#999',
    fontSize: 18,
    marginRight: 10,
  },
  description: {
    color: '#999',
    fontSize: 18,
  },
  image: {
    height: 300,
    marginBottom: 20,
    width: '100%',
  },
  content: {
    fontSize: 16,
    marginTop: 20,
  },
  favoriteIcon: {
    alignSelf: 'flex-end',
    marginLeft: 'auto',
  },
});
export default ItemDetails;
