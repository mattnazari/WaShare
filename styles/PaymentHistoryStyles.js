import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  mainContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 24,
  },

  scrollViewHeight:{
    flex:1,
  },

  titleTextRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginBottom:20
  },

  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },

  titleText: {
    fontFamily: 'CircularStd-Black',
    color: '#01126D',
    fontSize: 16,
    letterSpacing: -0.4,
  },

  historyBox: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginTop: 10,
    elevation: 16,
    marginVertical: 8,
    shadowColor: '#506BFB',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    borderRadius: 10,
  },

  machineAndPrice: {
    fontFamily: 'CircularStd-Black',
    fontSize: 14,
    letterSpacing: -0.4,
    color: '#000A3B',
  },

  historyInfoText: {
    fontFamily: 'CircularStd-Book',
    fontSize: 12,
    letterSpacing: -0.4,
    color: '#8D97CC',
    marginTop: 10,
  }
});

export default styles;
