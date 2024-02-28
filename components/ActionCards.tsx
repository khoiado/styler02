import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {

    const socialMedia = [
        {
            id: '1',
            name: 'Github',
            image: require('/Users/khoi/react-native/styler02/assets/teamMembersPics/GitHub-Mark-ea2971cee799.png'),
            link: 'https://github.com/khoiado',
            description: 'Check out our projects!'
        },
        {
            id: '2',
            name: 'LinkedIn',
            image: require('/Users/khoi/react-native/styler02/assets/teamMembersPics/circle-linkedin-512.webp'),
            link: 'Coming soon',
            description: 'Visit our page!'
        },
        {
            id: '3',
            name: 'Instagram',
            image: require('/Users/khoi/react-native/styler02/assets/teamMembersPics/instagram.jpg'),
            link: 'Coming soon',
            description: 'Follow us!'
        }
    ]

  return (
    <View>
      <Text style = {styles.headingText}>Find us here!</Text>
      {socialMedia.map((media) => (
        <View style = {styles.container}>
            <View key = {media.id} style = {[styles.bigCard, styles.container]}>
                <Image
                    source = {media.image}
                    style = {styles.socialMediaImage}
                />
            <View>
                <TouchableOpacity 
                    onPress = {() => Linking.openURL(media.link)}>
                        <Text style = {styles.socialLinks}>{media.description}</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    ))}
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight: 'bold',
        paddingHorizontal : 8,
        color: '#000000'
    },
    bigCard:{
        backgroundColor: '#2c3e50',
        width: 370,
        height: 100,
        borderRadius: 30,
        margin: 8,
    },
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,
        margin: 8
    },
    socialMediaImage:{
        height: 50,
        width: 50,
        borderRadius: 10,
        margin: 8
    },
    socialMediaImageGitHub:{
        height: 50,
        width: 50,
        borderRadius: 10,
        margin: 8
    },
    socialMediaImageLinkedIn:{
        height: 50,
        width: 50,
        borderRadius: 10,
        margin: 8
    },
    socialMediaImageInstagram:{
        height: 40,
        width: 40,
        borderRadius: 10,
        margin: 8
    }
})