/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'text-encoding-polyfill';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConfirmSendPage from './app/screens/confirmSendPage';
import ConfirmTxPage from './app/screens/confirmTxPage';
import {MyTabs} from './app/navigation/tabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Tab Navigator */}
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />

        {/* Additional Screens */}
        <Stack.Screen
          name="confirmSendPage"
          component={ConfirmSendPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="confirmTxPage"
          component={ConfirmTxPage}
          options={{headerShown: false, animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
