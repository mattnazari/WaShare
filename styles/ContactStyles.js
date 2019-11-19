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
    fontSize: 40,
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

  unitText:{
    fontFamily: 'CircularStd-Medium',
    color:'#777777',
    fontSize:17,
    paddingBottom:30
  },

  border:{
    borderWidth:1,
    borderColor:'#7771FC',
    borderRadius:10,
    height:70,
    marginBottom:30
  },

  confirm:{
    fontFamily: 'CircularStd-Medium',
    fontSize:17,
    color:'#506BFB',
    padding:5,
    paddingLeft:5
  },

  boxGrayText:{
    fontFamily: 'CircularStd-Book',
    fontSize:15,
    color:'#7C7C7E',
    paddingLeft:10
  },

  textColumn:{
    flexDirection:'column',
    justifyContent:'space-between'
  },

  checkmark:{
    padding:10,
    marginTop:10,
    display:'none'
  },

  checked:{
    padding:10,
    marginTop:10,
  },
});

export default styles;