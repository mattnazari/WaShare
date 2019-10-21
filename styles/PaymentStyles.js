import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
  background:{
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
    fontFamily: 'CircularStd-Book'
  },

  formContainer:{
      padding:40
  },

  textInput:{
      alignSelf:'stretch',
      height:50,
      borderStyle:'solid',
      borderColor:'#506BFB',
      borderWidth:1 ,
      borderRadius:10
  },

  formRow:{
      flexDirection:'row'
  },

  formColumn:{
    flexDirection:'column'
  }
});

export default styles;
