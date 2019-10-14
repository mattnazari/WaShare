import { StyleSheet } from 'react-native';

//#506BFB color for BOOK
//#6525FF color for STATUS
//#6F1CE5 color for NOTIFY

const notify = {
  container: {
    backgroundColor: '#6F1CE5',
    padding: 30,
    paddingTop: 60,
    borderBottomRightRadius: 40
  }
}

const theme = StyleSheet.create({
  book: {
    backgroundColor: '#506BFB',
    padding: 30,
    paddingTop: 60,
    borderBottomRightRadius: 40
  },
  status: {
    backgroundColor: '#6525FF',
    padding: 30,
    paddingTop: 60,
    borderBottomRightRadius: 40
  },
  notify: {

  }
})

export default theme;