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
import {getSecureStore, removeSecureSore} from './app/functions/secureStore';
import {ACCOUNT_MNEMOINC_KEY} from './app/constants';
import {WalletProvider} from './app/contexts/wallet';
import ViewMnemonic from './app/screens/mnemonicView';

const Stack = createNativeStackNavigator();

export default function App() {
  const [hasAccount, setHasAccount] = useState(null);
  useEffect(() => {
    const mnemoinc = getSecureStore({key: ACCOUNT_MNEMOINC_KEY});
    setHasAccount(!!mnemoinc);
  }, []);

  if (hasAccount === null) return;
  console.log('hey')

  return (
    <WalletProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={hasAccount ? 'MyTabs' : 'LoadingScreen'}
          screenOptions={{
            headerShown: false,
          }}>
          {/* Tab Navigator */}
          <Stack.Screen name="MyTabs" component={MyTabs} />
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} />

          {/* Additional Screens */}
          <Stack.Screen
            name="confirmTxPage"
            component={ConfirmTxPage}
            options={{animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="ViewMnemonic"
            component={ViewMnemonic}
            options={{
              animation: 'fade',
              presentation: 'transparentModal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </WalletProvider>
  );
}
