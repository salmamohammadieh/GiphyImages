import React from 'react';
import {View, StyleSheet} from 'react-native';

const Container = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 15,
  },
});
export default Container;
