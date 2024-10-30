import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Navigation from './navigation'

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#fff',
  },
})

export default App