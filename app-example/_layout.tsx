import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

function RootLayout() {
  <Stack.Navigator initialRouteName='HomeScreen'>
    <Stack.Screen name="HomeScreen"
    component={HomeScreen}/>
  </Stack.Navigator>
}

export default RootLayout;

