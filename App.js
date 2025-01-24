/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'text-encoding-polyfill';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConfirmTxPage from './app/screens/confirmTxPage';
import {MyTabs} from './app/navigation/tabs';
import LoadingScreen from './app/screens/loadingScreen';
import {useEffect, useState} from 'react';
import {getSecureStore} from './app/functions/secureStore';
import {ACCOUNT_MNEMOINC_KEY} from './app/constants';
import {WalletProvider} from './app/contexts/wallet';

const Stack = createNativeStackNavigator();

export default function App() {
  const [hasAccount, setHasAccount] = useState(null);
  useEffect(() => {
    const mnemoinc = getSecureStore({key: ACCOUNT_MNEMOINC_KEY});
    setHasAccount(!!mnemoinc);
  }, []);

  if (hasAccount === null) return;

  return (
    <WalletProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Tab Navigator */}
          <Stack.Screen
            name="MyTabs"
            component={hasAccount ? MyTabs : LoadingScreen}
            options={{headerShown: false}}
          />

          {/* Additional Screens */}
          <Stack.Screen
            name="confirmTxPage"
            component={ConfirmTxPage}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </WalletProvider>
  );
}
