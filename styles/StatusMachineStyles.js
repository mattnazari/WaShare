import { StyleSheet } from 'react-native';

export const colors = {
  main: '#6E41DA',
  dark: '#150161',
  light: '#A49FCD'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 280,
    height: 450,
    backgroundColor: "#FFF",
    padding: 24,
    margin: 12,
    elevation: 16,
    shadowColor: "#506AFB",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    borderRadius: 20,
  },
  title: {
    fontFamily: 'CircularStd-Black',
    fontSize: 36,
    letterSpacing: -1.2,
    paddingHorizontal: 24,
    color: colors.dark
  },
  subTitle: {
    fontFamily: 'CircularStd-Black',
    fontSize: 24,
    letterSpacing: -1.2,
    paddingHorizontal: 24,
    color: colors.dark
  },
  largeText: {
    fontFamily: 'CircularStd-Black',
    fontSize: 72,
    letterSpacing: -1.2,
    color: colors.dark
  },
  subText: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 16,
    letterSpacing: -0.6,
    color: colors.light
  },
  mediumText: {
    fontFamily: 'CircularStd-Black',
    fontSize: 28,
    letterSpacing: -0.8,
    color: colors.dark
  },
  circle: {
    backgroundColor: '#FFF',
    height: 170,
    width: 170,
    borderStyle: 'solid',
    borderColor: colors.main,
    borderRadius: 100,
    borderWidth: 10,
    elevation: 16,
    shadowColor: "#506AFB",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.45,
    shadowRadius: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  extendContainer: {
    width: 200,
    padding: 12,
    backgroundColor: colors.main,
    borderRadius: 10,
    elevation: 16,
    shadowColor: "#506AFB",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.45,
    shadowRadius: 12
  },
  extendText: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center'
  },
  cancelContainer: {
    width: 200,
    padding: 12,
    backgroundColor: '#FFF',
    borderColor: colors.main,
    borderWidth: 1,
    borderRadius: 10,
  },
  finishContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  }
})

export default styles;