import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 0,
    alignSelf: 'stretch',
    fontFamily: 'CircularStd-Book',
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
    fontFamily: 'CircularStd-Book',
  },

  formContainer: {
    padding: 40,
    paddingTop: 50,
  },

  textInput: {
    alignSelf: 'stretch',
    height: 50,
    borderStyle: 'solid',
    borderColor: '#506BFB',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },

  cvv: {
    alignSelf: 'stretch',
    height: 50,
    borderStyle: 'solid',
    borderColor: '#506BFB',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width:127
  },

  monthAndYear:{
    alignSelf: 'stretch',
    height: 50,
    borderStyle: 'solid',
    borderColor: '#506BFB',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width:144
  },

  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  formColumn: {
    flexDirection: 'column',
  },

  footerContainer: {
    padding: 40,
  },

  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    paddingBottom: 60,
  },

  inputPadding: {
    paddingBottom: 30,
  },

  textStyling: {
    paddingBottom: 20,
    fontFamily: 'CircularStd-Book',
    fontSize: 15,
  },

  switch: {
    transform: [{scaleX: 0.6}, {scaleY: 0.6}],
  },
});

export default styles;
