import {StyleSheet, Text, View} from 'react-native';
import ThemeText from '../themeElements/themeText';
import CustomView from '../themeElements/globalView';

export default function LoadingScreen() {
  return (
    <CustomView>
      <ThemeText text={'LOADING SCREEN'} />
    </CustomView>
  );
}

const styles = StyleSheet.create({});
