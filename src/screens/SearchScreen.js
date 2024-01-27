import Container from '../components/Container';
import ErrorMessage from '../components/Error';
import Items from '../components/Items';
import React, {useState} from 'react';
import SearchIcon from '../components/SearchIcon';
import {Text, View, TextInput, FlatList, StyleSheet} from 'react-native';
import {giphy} from '../services/api';

const SearchScreen = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const searchHandler = async term => {
    try {
      const items = await giphy.get('/search', {
        params: {
          api_key: 'QnJxr8qqz5EmkGTfJznaBPD1W4oHCinV',
          q: term,
        },
      });
      setResults(items.data.data.length ? items.data.data : 0);
      setError('');
    } catch (err) {
      setError('An error occured try later');
    }
  };
  return (
    <Container>
      <View style={styles.wrapper}>
        <SearchIcon />
        <TextInput
          placeholder="search for Gifs"
          onEndEditing={event => searchHandler(event.nativeEvent.text)}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
      </View>
      {error ? (
        <ErrorMessage error={error} />
      ) : results === 0 ? (
        <Text>No results were found</Text>
      ) : (
        <FlatList
          data={results}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Items
              title={item.title}
              imageUrl={item.images?.fixed_width_downsampled?.url}
              id={item.id}
            />
          )}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 18,
    height: 40,
    margin: 8,
    width: '80%',
  },
  wrapper: {
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});
export default SearchScreen;
