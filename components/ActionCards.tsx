import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink : string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>Blog Card</Text>
      <View style = {[styles.card, styles.elevatedCard]}>
        <View style = {styles.headingContainer}>
            <Text style = {styles.headerText}> Banana</Text>
        </View>
            <Image
            source = {{
                uri : 'https://gorillafoundation.nl/wp-content/uploads/2016/01/leefgebied-gorilla.jpg'
            }}
            style = {styles.cardImage}
            />
            <View style = {styles.bodyContainer}>
                <Text numberOfLines={3}>
                    Gorillas like bananas. blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                </Text>
            </View>
            <View style = {styles.footerContainer}>
                <TouchableOpacity 
                onPress = {() => openWebsite('https://www.worldwildlife.org/species/mountain-gorilla')}>
                    <Text style = {styles.socialLinks}> Read More </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress = {() => openWebsite('https://www.worldwildlife.org/species/mountain-gorilla')}>
                    <Text style = {styles.socialLinks}> Follow Me </Text>
                </TouchableOpacity>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight: 'bold',
        paddingHorizontal : 8
    },
    card: {
        width : 350,
        height : 360,
        borderRadius: 6,
        marginVertical : 12,
        marginHorizontal : 16
    },
    elevatedCard: {
        backgroundColor: '#eo7c24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
          },
          shadowColor: '#333',
          shadowOpacity: 0.4
    },
    headingContainer : {
        height : 40,
        flexDirection: 'row',
        justifyContent : 'center',
        alignItems: 'center'
    },
    headerText : {
        color : '#000000',
        fontSize : 16,
        fontWeight: '600'
    },
    cardImage : {
        height: 190
    },
    bodyContainer : {
        padding: 10
    },
    footerContainer : {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    }

})