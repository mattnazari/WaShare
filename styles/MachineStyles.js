import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 24,
    letterSpacing: -0.6,
    paddingHorizontal: 24,
    color: '#03003C'
  },
  scrollContainer: {
    padding: 24,
    marginTop: -20
  },
  container: {
    justifyContent: 'space-between',
    width: 130,
    height: 160,
    backgroundColor: "#FFF",
    padding: 12,
    margin: 12,
    elevation: 16,
    shadowColor: "#9EC8FF",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14,
    borderRadius: 20,
  },
  machine: {
    color: '#000233',
    fontFamily: 'CircularStd-Bold',
    fontSize: 16,
    letterSpacing: -0.6,
    textAlign: 'center'
  },
  timeRemaining: {
    color: '#93A2B3',
    fontSize: 11,
    letterSpacing: -0.4,
    textAlign: 'center'
  },
})

export default styles;