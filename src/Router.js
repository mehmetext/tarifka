import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import MealsOfCategory from './pages/MealsOfCategory';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTitle: 'Categories'}}
        />
        <Stack.Screen
          name="MealsOfCategory"
          component={MealsOfCategory}
          options={({route}) => ({headerTitle: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
