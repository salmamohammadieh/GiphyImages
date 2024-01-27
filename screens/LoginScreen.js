import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {login} from '../redux/actions/authenticationActions';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function loginHandler() {
    //todo: modify the redux state
    //todo: add basic validation
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
        placeholder="password"
        onChangeText={value => setPassword(value)}
        value={password}
        autoCapitalize="none"
        autoComplete="off"
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={loginHandler} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});
export default LoginScreen;
