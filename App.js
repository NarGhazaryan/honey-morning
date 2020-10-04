import React ,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import { DB } from './src/screens/db';
import HomeScreenRoute from './src/screens/HomeScreen/HomeScreenRoute';
import FavScreenRoute from './src/screens/NoteScreen/NoteScreenRoute';
import { AddScreen } from './src/screens/AddScreen/AddScreen';


const Tab = createMaterialBottomTabNavigator();

const dbInit = async () => {
  try {
    DB.init()    
    console.log("DBBBBB");

  } catch (error) {
    console.log(error);
  }
}

export default function App() {

  const [isReady, setIsReady] = useState(false)

  if(!isReady){
    return(
      <AppLoading 
      startAsync={dbInit}
      onFinish={() => setIsReady(true)}
      onError={err => console.log(err)}/>
        )}
  return (
<NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#eaac9d"
        inactiveColor="#ccc"
        barStyle={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreenRoute}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavScreenRoute}
          options={{
            tabBarLabel: 'Saved',
            tabBarIcon: ({ color }) => (
              <Entypo name="heart" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="AddScreen"
          component={AddScreen}
          options={{
            tabBarLabel: 'My Recipe',
            tabBarIcon: ({ color }) => (
              <Entypo name="heart-outlined" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
