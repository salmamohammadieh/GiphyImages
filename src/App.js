import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ItemsDetailsScreen from './screens/ItemDetailsSreen';
import FavoriteScreen from './screens/FavoriteScreen';
import store from './redux/store';
import {Provider} from 'react-redux';
import SearchScreen from './screens/SearchScreen';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const StackNavigator = () => {
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="DetailsScreen" component={ItemsDetailsScreen} />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: 'Giphy images',
            headerTitleAlign: 'center',
          }}
        />
      )}
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
