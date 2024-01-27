import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ErrorMessage = ({error}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    borderRadius: 2,
  },
  error: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default ErrorMessage;
