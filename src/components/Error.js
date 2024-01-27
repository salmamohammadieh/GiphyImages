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
    backgroundColor: 'red',
    borderRadius: 2,
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  error: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default ErrorMessage;
