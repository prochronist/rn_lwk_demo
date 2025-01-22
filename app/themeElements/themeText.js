import {StyleSheet, Text} from 'react-native';
import {TEXT_COLOR} from '../constants';

export default function ThemeText({text, customStyles}) {
  return (
    <Text
      style={{
        ...styles.textStyle,
        ...customStyles,
      }}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: TEXT_COLOR,
    fontSize: 20,
  },
});
