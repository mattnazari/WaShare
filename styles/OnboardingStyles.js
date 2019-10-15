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

    buttons:{
        justifyContent:'flex-end'
    },

    options:{
        flexDirection:'row',
        justifyContent:'flex-end',
    },

    optionsText:{
        color:'#353535',
        fontSize:15,
        fontFamily:'CircularStd-Black'
    },

    descTxt:{
        width:260,
        fontSize:15,
        color:'#353535',
        textAlign:'center',
        marginTop: 30,
        fontFamily:'CircularStd-Book'
    },

    checkboxesCont:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginTop:30,
        width:100
    },

    checkboxes:{
        width:12,
        height:12,
        borderRadius:100,
        borderColor:'#506BFB'
    }
});

export default styles;