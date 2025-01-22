import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';

import SendBitcoin from '../screens/send';
import WalletHome from '../screens/wallet';
import ReceiveBitcoin from '../screens/receive';
import {ALTERNATE_TEXT, TEXT_COLOR} from '../constants';
import ThemeText from '../themeElements/themeText';
import CustomView from '../themeElements/globalView';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name === 'ContactsPageInit'
            ? 'Contacts'
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            activeOpacity={1}
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <ThemeText
              customStyles={{
                ...styles.labelText,
                color: isFocused ? ALTERNATE_TEXT : TEXT_COLOR,
              }}
              text={
                label === 'Home'
                  ? 'Wallet'
                  : label === 'App Store'
                  ? 'Store'
                  : label
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export function MyTabs() {
  return (
    <CustomView customStyles={{width: '100%'}}>
      <Tab.Navigator
        initialRouteName={'Wallet'}
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Send" component={SendBitcoin} />
        <Tab.Screen name="Wallet" component={WalletHome} />
        <Tab.Screen name="Receive" component={ReceiveBitcoin} />
        {/* Eventualy make this the app drawer onces there are enough apps to segment */}
      </Tab.Navigator>
    </CustomView>
  );
}

const styles = StyleSheet.create({});
