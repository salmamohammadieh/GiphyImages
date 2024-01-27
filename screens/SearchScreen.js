import React, {useState} from 'react';
import {Text, View, TextInput, FlatList, StyleSheet} from 'react-native';
import SearchIcon from '../components/searchicon';
import Container from '../components/container';
import {giphy} from '../utils/api';
import Items from '../components/items';
import ErrorMessage from '../components/error';

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
    height: 40,
    margin: 8,
    width: '80%',
    flex: 1,
    fontSize: 18,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});
export default SearchScreen;
