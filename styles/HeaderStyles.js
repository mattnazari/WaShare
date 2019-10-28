import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    margin: 10,
    padding: 10
  },
  activeText: {
    fontSize: 14,
    fontFamily: 'CircularStd-Bold',
    letterSpacing: -0.4,
    color: '#506BFB'
  },
  text: {
    fontSize: 14,
    fontFamily: 'CircularStd-Book',
    letterSpacing: -0.4,
    color: '#C2C9D7'
  },
  spacing: {
    paddingHorizontal: 6
  },
  titleText: {
    fontSize: 32,
    fontFamily: 'CircularStd-Black',
    letterSpacing: -0.4,
    color: '#FFF',
    marginBottom: 10
  },
  titleContainer: {
    backgroundColor: '#506BFB',
    padding: 30,
    paddingTop: 60,
    borderBottomRightRadius: 40
  },
  titleDesc: {
    color: '#FFF',
    fontFamily: 'CircularStd-Medium',
    fontSize: 14,
    letterSpacing: -0.2
  },
  iconBar: {
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconBarRight: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end' }
})

export default styles;