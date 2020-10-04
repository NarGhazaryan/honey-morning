import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FavScreen } from './NoteScreen';
import { FavScreenItem } from './NoteScreenItem';

const FavStack = createStackNavigator();

function FavScreenRoute() {
  return (
    <FavStack.Navigator
        screenOptions={{
            header: () => null
        }}>
      <FavStack.Screen name="FavScreen" component={ FavScreen } />
      <FavStack.Screen name="FavScreenItem" component={ FavScreenItem } />
    </FavStack.Navigator>
  );
}

export default FavScreenRoute;