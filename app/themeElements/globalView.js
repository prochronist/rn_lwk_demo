import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  BACKGROUND_COLOR,
  CENTER_ELEMENT,
  TEXT_COLOR,
  WINDOW_WIDTH,
} from '../constants';

export default function CustomView({children, customStyles}) {
  return (
    <View style={styles.globalContainer}>
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
