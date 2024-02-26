import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style = {styles.headingText}>Trending</Text>
      <View style = {[styles.card, styles.cardElevated]}>
        <Image
        source = {{
            uri: 'https://as1.ftcdn.net/v2/jpg/01/23/29/38/1000_F_123293816_PvnD8vbMlABfywNSfZdpRRxfwPe71yVG.jpg'
        }}
        style = {styles.cardImage}
        />
        <View style = {styles.cardBody}>
            <Text style = { styles.cardTitle}> Gorilla </Text>
            <Text style = { styles.cardLabel}> This guy kinda looks like david </Text>
            <Text style = { styles.cardDescription}> Found this guy in his house near Autumn Sun Dr </Text>
            <Text style = { styles.cardFooter}> 15 mins away from Sugar Land </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8
    },
    card : {
      width: 350,
      height: 350,
      borderRadius: 20,
      marginVertical: 12,
      marginHorizontal: 16
    },
    cardElevated : {
      backgroundColor: '#ffffff',
      elevation: 3,
      shadowOffset: {
        width: 1,
        height: 1
      }
    },
    cardImage: {
       height : 180,
       marginBottom: 8,
       borderTopLeftRadius : 6,
       borderTopRightRadius : 6
    },
    cardBody : {
      flex: 1,
      flexGrow: 1,
      paddingHorizontal : 12
    },
    cardTitle : {
      color: '#000000',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 4
    },
    cardLabel : {
      color: '#000000',
      fontSize: 14,
      marginBottom: 6

    }
    , cardDescription : {
      color: '#000000',
      fontSize: 12,
      marginBottom: 12,
      marginTop: 6,
      flexShrink: 1
    },
    cardFooter : {
      color: '#000000'
    }
})