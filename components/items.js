import React, {memo} from 'react';
import {Text, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FavoriteIcon from './favoriteIcon';
import useFavoriteCheck from '../hooks/useFavoriteCheck';
import useFavoriteActions from '../hooks/useFavoriteActions';

const Items = ({withFavorites, id, title, imageUrl, description}) => {
  const navigation = useNavigation();
  const isSaved = useFavoriteCheck(id);
  const {handleToggleFavorite} = useFavoriteActions();

  const pressHandler = () => {
    navigation.navigate('DetailsScreen', {id: id});
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
          <View style={styles.cardContent}>
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
    fontSize: 18,
    flex: 1,
    color: '#778899',
    padding: 10,
  },
  image: {
    flex: 1,
    height: 250,
  },
  card: {
    marginVertical: 8,
    backgroundColor: 'white',
    flexBasis: '45%',
    marginHorizontal: 10,
  },
  imageContainer: {
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
  },
  favoriteIcon: {
    bottom: '0',
    right: '0',
  },
});
export default memo(Items);
