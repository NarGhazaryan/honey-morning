import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen';
import { HomeScreenItem } from './HomeScreenItem'
const HomeStack = createStackNavigator();

function HomeScreenRoute() {
  return (
    <HomeStack.Navigator
        screenOptions={{
            header: () => null
        }}>
      <HomeStack.Screen name="HomeScreen" component={ HomeScreen } />
      <HomeStack.Screen name="HomeScreenItem" component={ HomeScreenItem } />
    </HomeStack.Navigator>
  );
}

export default HomeScreenRoute;