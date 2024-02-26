import React from 'react'

import {
  View, Text, SafeAreaView, ScrollView, StyleSheet
} from 'react-native'

import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'
import FlatCards from './components/FlatCards'

function App(){
  return(
    <SafeAreaView style = {styles.container}>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
        <ContactList/>
        <ActionCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#ffffff'
  }
})


export default App