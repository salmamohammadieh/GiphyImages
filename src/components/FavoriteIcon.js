import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {TouchableOpacity} from 'react-native';

function FavoriteIcon({status, onPress}) {
  const iconComponent = status ? (
    <Icon name="heart" size={25} />
  ) : (
    <Icon name="heart-o" size={25} />
  );
  return <TouchableOpacity onPress={onPress}>{iconComponent}</TouchableOpacity>;
}

export default FavoriteIcon;
