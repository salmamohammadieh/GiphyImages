import FavoriteIcon from './FavoriteIcon';
import React, {memo} from 'react';
import useFavoriteActions from '../hooks/useFavoriteActions';
import useFavoriteCheck from '../hooks/useFavoriteCheck';
import {Text, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Items = ({
  withFavorites,
  id,
  title,
  imageUrl,
  description,
  slug,
  url,
  type,
}) => {
  const navigation = useNavigation();
  const isSaved = useFavoriteCheck(id);
  const {handleToggleFavorite} = useFavoriteActions();

  const pressHandler = () => {
    navigation.navigate('DetailsScreen', {
      id,
      title,
      imageUrl,
      description,
      slug,
      url,
      type,
    });
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={pressHandler}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: imageUrl,
            }}
          />
        </View>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.cardContent}>
        {description ? (
          <Text style={styles.text}>description: {description}</Text>
        ) : null}
        {withFavorites && (
          <View style={styles.favoriteIcon}>
            <FavoriteIcon
              status={isSaved}
              onPress={() => {
                handleToggleFavorite(isSaved, id, title, imageUrl);
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#778899',
    flex: 1,
    fontSize: 18,
    padding: 10,
  },
  image: {
    flex: 1,
    height: 250,
  },
  card: {
    backgroundColor: 'white',
    flexBasis: '45%',
    marginHorizontal: 10,
    marginVertical: 8,
  },
  imageContainer: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  favoriteIcon: {
    alignSelf: 'flex-end',
    margin: 5,
  },
});
export default memo(Items);
