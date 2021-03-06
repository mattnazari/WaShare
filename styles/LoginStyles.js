import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 50,
    paddingTop: 100,
    margin: 0,
    alignSelf: 'stretch',
    fontFamily: 'CircularStd-Book',
  },
  welcomeText: {
    fontSize: 52,
    color: '#191919',
    letterSpacing: -1.85,
    fontFamily: 'CircularStd-Black',
  },
  header: {
    fontSize: 24,
    color: '#A8A8A8',
    letterSpacing: -0.6,
    fontFamily: 'CircularStd-Book',
  },

  inputTitle: {
    fontSize: 13,
    color: '#9F9F9F',
    fontFamily: 'CircularStd-Book',
  },

  txtInput: {
    alignSelf: 'stretch',
    height: 40,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 40,
    fontFamily: 'CircularStd-Book',
  },

  forget: {
    alignSelf: 'flex-end',
    fontFamily: 'CircularStd-Book',
  },

  forgetText: {
    fontSize: 12,
    color: '#353535',
  },

  rememberText: {
    fontSize: 12,
    color: '#353535',
    paddingBottom: 15,
  },

  checkBox: {
    width: 12,
    height: 12,
    borderColor: '#979797',
    borderRadius: 3,
    marginRight: 20,
  },

  loginOptions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#506BFB',
    padding: 12,
    borderRadius: 10,
    elevation: 16,
    shadowColor: '#9EC8FF',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.75,
    shadowRadius: 12,
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'CircularStd-Bold'
  },

  login: {},
});

export default styles;
