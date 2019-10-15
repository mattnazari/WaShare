import { StyleSheet } from 'react-native';

const bookStyles = {
  mainColor: '#506BFB',
  shadowColor: "#9EC8FF"
}

const statusStyles = {
  mainColor: '#6525FF',
  shadowColor: '#8B71FC'
}

const notifyStyles = {
  mainColor: '#6F1CE5',
  shadowColor: '#9E7AFF'
}

export const book = StyleSheet.create({
  color: {
    backgroundColor: bookStyles.mainColor
  },
  shadowColor: {
    shadowColor: bookStyles.shadowColor
  },
  borderColor: {
    borderColor: bookStyles.mainColor
  }
})

export const status = StyleSheet.create({
  color: {
    backgroundColor: statusStyles.mainColor
  },
  shadowColor: {
    shadowColor: statusStyles.shadowColor
  },
  borderColor: {
    borderColor: statusStyles.mainColor
  }
})

export const notify = StyleSheet.create({
  color: {
    backgroundColor: notifyStyles.mainColor
  },
  shadowColor: {
    shadowColor: notifyStyles.shadowColor
  },
  borderColor: {
    borderColor: notifyStyles.mainColor
  }
})