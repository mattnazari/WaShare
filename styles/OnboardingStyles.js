import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'space-between',
        margin:0,
        padding:60,
        alignSelf:'stretch'
    },

    tutorialCont:{
        justifyContent:'center',
        alignItems:'center'
    },

    title:{
        fontSize:24,
        color:'#353535',
        marginTop:60,
        textAlign:'center',
        fontFamily:'CircularStd-Black'
    },

    skip:{
        flexDirection:'row',
        justifyContent:'flex-end',
    },

    optionsText:{
        color:'#353535',
        fontSize:15,
        fontFamily:'CircularStd-Black'
    },

    nextAndPrev:{
        flexDirection:'row',
        justifyContent:'space-between'
    },  

    descTxt:{
        width:260,
        fontSize:16,
        color:'#353535',
        textAlign:'center',
        marginTop: 30,
        fontFamily:'CircularStd-Book'
    },

    descTxtCont:{
        width:260,
        height:100,
        justifyContent:'center',
        alignItems:'center'
    },

    buttonsCont:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginTop:60,
        width:100
    },

    uncheckedButtons:{
        width:15,
        height:15,
        borderRadius:100,
        borderColor:'#506BFB',
        borderStyle: 'solid',
        borderWidth: 1
    },

    checkedButtons:{
        width:15,
        height:15,
        borderRadius:100,
        borderColor:'#506BFB',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor:'#506BFB'
    }
});

export default styles;
