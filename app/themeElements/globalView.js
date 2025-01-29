import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  BACKGROUND_COLOR,
  CENTER_ELEMENT,
  TEXT_COLOR,
  WINDOW_WIDTH,
} from '../constants';

export default function CustomView({
  children,
  customStyles,
  customOuterStyles,
}) {
  return (
    <View style={{...styles.globalContainer, ...customOuterStyles}}>
      <SafeAreaView style={{...styles.innerContainer, ...customStyles}}>
        {children}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  innerContainer: {
    flex: 1,
    paddingVertical: 10,
    width: WINDOW_WIDTH,
    ...CENTER_ELEMENT,
  },
});
