import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: 130,
    height: 160,
    backgroundColor: "#FFF",
    padding: 12,
    margin: 12,
    elevation: 16,
    borderRadius: 20,
  },
  washerId: {
    color: '#000233',
    fontFamily: 'CircularStd-Bold',
    fontSize: 16,
    letterSpacing: -0.6,
    textAlign: 'center'
  },
  timeRemaining: {
    fontSize: 12,
    letterSpacing: -0.4,
    textAlign: 'center'
  }
});

export default styles;