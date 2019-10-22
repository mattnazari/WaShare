import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'space-between',
        margin: 0,
        padding: 60,
        alignSelf: 'stretch'
    },

    tutorialCont: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        marginVertical: 8,
        fontSize: 32,
        color: '#353535',
        letterSpacing: -0.85,
        textAlign: 'center',
        fontFamily: 'CircularStd-Black'
    },

    skip: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    backText: {
        color: '#B1B1B1',
        fontSize: 14,
        fontFamily: 'CircularStd-Book'
    },
    nextText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'CircularStd-Black'
    },
    nextAndPrev: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    descTxt: {
        width: 260,
        fontSize: 16,
        letterSpacing: -0.2,
        color: '#5A5A5A',
        textAlign: 'center',
        fontFamily: 'CircularStd-Book'
    },

    buttonsCont: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 60,
        width: 100
    },

    uncheckedButtons: {
        width: 12,
        height: 12,
        borderRadius: 100,
        borderColor: '#506BFB',
        borderStyle: 'solid',
        borderWidth: 1
    },

    checkedButtons: {
        width: 12,
        height: 12,
        borderRadius: 100,
        borderColor: '#506BFB',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#506BFB'
    },
    images: {
        resizeMode: 'contain',
        width: 330,
        height: 330
    },
    button: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        backgroundColor: '#506BFB',
        borderRadius: 10,
        elevation: 16,
        shadowColor: "#9EC8FF",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.95,
        shadowRadius: 8,
    },
});

export default styles;
