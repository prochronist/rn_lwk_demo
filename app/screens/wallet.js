import {StyleSheet} from 'react-native';
import ThemeText from '../themeElements/themeText';
import CustomView from '../themeElements/globalView';

export default function WalletHome() {
  return (
    <CustomView>
      <ThemeText text={'HOME TEXT'} />
    </CustomView>
  );
}

const styles = StyleSheet.create({});
