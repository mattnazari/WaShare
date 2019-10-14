import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    margin: 28,
    backgroundColor: '#506BFB',
    borderRadius: 10,
    elevation: 16,
    shadowColor: "#9EC8FF",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.75,
    shadowRadius: 12,
  },
  text: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center'
  }
})

export default styles;