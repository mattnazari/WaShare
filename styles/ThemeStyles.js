import { StyleSheet } from 'react-native';

//#506BFB color for BOOK
//#6525FF color for STATUS
//#6F1CE5 color for NOTIFY

const bookStyles = {
  mainColor: '#506BFB'
}

const statusStyles = {
  mainColor: '#6525FF'
}

const notifyStyles = {
  mainColor: '#6F1CE5'
}

export const book = StyleSheet.create({
  color: {
    backgroundColor: bookStyles.mainColor
  }
})

export const status = StyleSheet.create({
  color: {
    backgroundColor: statusStyles.mainColor
  }
})

export const notify = StyleSheet.create({
  color: {
    backgroundColor: notifyStyles.mainColor
  }
})