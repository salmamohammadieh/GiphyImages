import React, {useState} from 'react';
import {login} from '../redux/actions/authenticationActions';
import {useDispatch} from 'react-redux';
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';

const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);
  const dispatch = useDispatch();

  function loginHandler() {
    setError([]);
    if (!email || !password) {
      if (!email || !reg.test(email)) {
        setError(prevMessage => [...prevMessage, 'Email is required']);
      }
      if (!password) {
        setError(prevMessage => [...prevMessage, 'Password is required']);
      }
      return;
    }
    dispatch(login());
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={value => setEmail(value)}
        value={email}
        autoCapitalize="none"
        autoComplete="off"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={value => setPassword(value)}
        value={password}
        autoCapitalize="none"
        autoComplete="off"
        secureTextEntry
        style={styles.input}
      />
      {error && (
        <View style={styles.errorContainer}>
          {error.map((err, index) => {
            return (
              <Text style={styles.error} key={index}>
                {err}
              </Text>
            );
          })}
        </View>
      )}
      <Button title="Login" onPress={loginHandler} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    maxWidth: 340,
    padding: 20,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    height: 50,
    margin: 15,
    padding: 10,
    width: '90%',
    fontSize: 18,
  },
  error: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  errorContainer: {
    textAlign: 'left',
    width: '85%',
    marginVertical: 15,
  },
});
export default LoginScreen;
