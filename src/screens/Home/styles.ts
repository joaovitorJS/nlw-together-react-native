import { StyleSheet } from 'react-native';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({

  header: {
    width: '100%',
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 42,
    ...ifIphoneX({
      marginTop: getStatusBarHeight() + 26,
    }, {
      marginTop: 26,
    })
   
  },

  matches: {
    marginTop: 24,
    marginLeft: 24,
  }

});