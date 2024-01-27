import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';

function SearchIcon({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="search" size={30} />
    </TouchableOpacity>
  );
}

export default SearchIcon;
