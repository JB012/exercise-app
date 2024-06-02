import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

function RootLayout() {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen 
        name='HomeScreen'
        component={HomeScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name='DetailScreen'
        component={DetailScreen}
        options={{headerTitle: "Exercise Details"}}
      />
    </Stack.Navigator>  
  );
}

export default RootLayout;
