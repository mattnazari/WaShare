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
    fontSize: 36,
    color: '#2B2B2B',
    letterSpacing: -1.85,
    fontFamily: 'CircularStd-Bold',
    marginTop:50,
  },

  headerText:{
    fontFamily: 'CircularStd-Book',
    color:'#353535',
    fontSize:15
  },

  headerTextContainer:{
    marginTop:10
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

  cancelButton:{
    alignSelf:'stretch',
    alignItems:'center',
    borderColor:'#7771FC',
    borderRadius:10,
    padding:12,
    borderWidth:0.5,
    marginTop:15
  },

  cancelText:{
    color: '#506BFB',
    fontSize: 17,
    fontFamily: 'CircularStd-Bold'
  },

  resetText:{
      fontFamily:'CircularStd-Medium',
      fontSize:20,
      color:'#777777',
      paddingBottom:10
  },

  input:{
      borderBottomColor:'#787878',
      borderBottomWidth:1,
      height:50
  }
});

export default styles;