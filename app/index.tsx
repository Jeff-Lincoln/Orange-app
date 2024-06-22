import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome5 } from '@expo/vector-icons'

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.MyHeader}>
        <FontAwesome5 name="truck" size={30} color="black" />
        <Text style={styles.headerText} className='text-gray-500'>Move-Easy</Text>
      </View>
      <Image source={require('@/assets/images/Order.jpeg')}
        className="w-full h-300" />
    </SafeAreaView>
  )
}

export default Page;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  MyHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 120,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  // image: {
  //   width: 200,
  //   height: 200,
  //   paddingTop: 40,
  // }
})