import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 16,
    letterSpacing: -0.4,
    color: '#363636'
  },
  message: {
    fontFamily: 'CircularStd-Book',
    fontSize: 14,
    letterSpacing: -0.4,
    color: '#676666'
  },
  timeText: {
    fontFamily: 'CircularStd-Book',
    fontSize: 12,
    letterSpacing: -0.4,
    color: '#ACACAC',
    alignSelf: 'flex-end'
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 24
  },
  notificationContainerOne: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: "#FBF8F8",
    padding: 24,
    elevation: 16,
    marginVertical: 8,
    shadowColor: "#919191",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    borderRadius: 20,
    borderLeftWidth: 12,
    borderLeftColor: '#7E33B8'
  },

  notificationContainerTwo: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: "#FBF8F8",
    padding: 24,
    elevation: 16,
    marginVertical: 8,
    shadowColor: "#919191",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    borderRadius: 20,
    borderLeftWidth: 12,
    borderLeftColor: '#506BFB'
  },

  notificationContainerThree: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: "#FBF8F8",
    padding: 24,
    elevation: 16,
    marginVertical: 8,
    shadowColor: "#919191",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    borderRadius: 20,
    borderLeftWidth: 12,
    borderLeftColor: '#6E41DA'
  }
})

export default styles;