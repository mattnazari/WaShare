import {StyleSheet} from 'react-native';

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

  header: {
    fontSize: 34,
    color: '#353535',
    paddingTop: 50,
    fontFamily: 'CircularStd-Black',
  },

  inputTitle: {
    fontSize: 13,
    color: '#9F9F9F',
    fontFamily: 'CircularStd-Book',
  },

  txtInput: {
    alignSelf: 'stretch',
    height: 40,
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
    padding: 20,
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
    fontFamily: 'CircularStd-Book'
  },

  login: {},
});

export default styles;
