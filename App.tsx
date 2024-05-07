import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

export default function App() {
  return (
    <SafeAreaView style={styles.bgContainer}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: '#000',
    alignItems: 'center',
  },
})