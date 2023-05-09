import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    width: Dimensions.get('window').width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
});

export default styles;
