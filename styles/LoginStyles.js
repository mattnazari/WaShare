import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent:'space-between',
    padding:60,
    margin: 0,
    alignSelf: 'stretch',
  },

  header: {
    fontSize: 34,
    color: '#353535',
    paddingTop:50,
  },

  inputTitle: {
      fontSize:13,
      color:'#9F9F9F'
  },

  txtInput: {
      alignSelf:'stretch',
      height:40,
      borderBottomWidth:1,
      borderBottomColor:'black',
      marginBottom:40
  },

  forget: {
      alignSelf:'flex-end'
  },

  forgetText: {
    fontSize:12,
    color:'#353535'
  },

  rememberText: {
    fontSize:12,
    color:'#353535',
    paddingBottom:15
  },

  checkBox: {
    width:12,
    height:12,
    borderColor:'#979797',
    borderRadius:3,
    marginRight:20
  },

  loginOptions: {
    flexDirection:'row',
    justifyContent:'flex-end',
  },

  button:{
      alignSelf:'stretch',
      alignItems:'center',
      backgroundColor:'#506BFB',
      padding:20,
      borderRadius:10,
  },

  buttonText: {
    color:'white',
    fontSize:17
  },

  login: {

  }
});

export default styles;