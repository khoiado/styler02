import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
        <View>
            <Text style={styles.headingText}>Roles</Text>
        </View>
        <ScrollView horizontal={true}>
            <View style = {[styles.card, styles.center]}>
                <Text style = {styles.leftJustify}>Ivan Tong</Text>
                <View style = {styles.smallCardContainer}>
                    <Image style = {styles.tinyLogo}
                        source = {{uri: 'https://i.pinimg.com/736x/3c/7f/86/3c7f8614cdd31db8634f33b403b93670.jpg'}}
                    />
                    <View style = {styles.smallCard}>
                        <Text style = {styles.smallCardText}>CEO</Text>
                    </View>
                    <View style = {styles.smallCard}>
                        <Text style = {styles.smallCardText}>Fulltime</Text>
                    </View>
                    <View style = {styles.smallCard}>
                        <Text style = {styles.smallCardText}>Remote</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.textColor}>Product Designer</Text>
                    <Text style = {styles.textColor}>Sugar Land, TX - USA</Text>
                </View>
            </View>
            <View style = {[styles.card, styles.center]}>
                <Text style = {styles.leftJustify}>Nathan Bucasas</Text>
                <View style = {styles.smallCardContainer}>
                    <Image style = {styles.tinyLogo}
                        source = {{uri: 'https://i.pinimg.com/736x/3c/7f/86/3c7f8614cdd31db8634f33b403b93670.jpg'}}
                    />
                    <View style = {styles.smallCard}>
                        <Text style = {styles.smallCardText}>Co-Founder</Text>
                    </View>
                    <View style = {styles.smallCard}>
                        <Text style = {styles.smallCardText}>Fulltime</Text>
                    </View>
                    <View style = {styles.smallCard}>
                        <Text style = {styles.smallCardText}>Remote</Text>
                    </View>
                </View>
                <View style = {styles.center}>
                    <Text style = {styles.textColor}>Database Systems</Text>
                    <Text style = {styles.textColor}>Sugar Land, TX - USA</Text>
                </View>
            </View>
            <View style = {[styles.card, styles.center]}>
                <Text style = {styles.leftJustify}>Robert Nguyen</Text>
                <View style = {styles.smallCardContainer}>
                    <Image style = {styles.tinyLogo}
                        source = {{uri: 'https://i.pinimg.com/736x/3c/7f/86/3c7f8614cdd31db8634f33b403b93670.jpg'}}
                    />
                    <View style = {styles.smallCard}>
                        <Text style = {styles.smallCardText}>Co-Founder</Text>
                    </View>
                    <View style = {styles.smallCard}>
                        <Text style = {styles.smallCardText}>Fulltime</Text>
                    </View>
                    <View style = {styles.smallCard}>
                        <Text style = {styles.smallCardText}>Remote</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.textColor}></Text>
                    <Text style = {styles.textColor}>Sugar Land, TX - USA</Text>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal: 8,
        color: '#000000'
    },
    text : {
        fontSize: 14,
        fontWeight: 'bold'
    },
    card : {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 8,
        width: 300,
        height : 170,
        borderRadius: 20,
        margin: 8,
        backgroundColor: '#038aff'
    },
    container: {
        padding: 8,
        borderRadius: 40,
    },
    textColor :{
        color : '#ffffff'
    },
    textColorBlack: {
        color: '#000000'
    },
    tinyLogo:{
        height:30,
        width: 30,
        borderRadius: 30
    },
    smallCard: {
        borderRadius: 30,
        backgroundColor: '#89c4f4',
        width: 60,
        height: 15,
        flex: 1,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallCardText: {
        fontSize: 12,
        color: 'ffffff',
        flex: 1,
    },
    smallCardContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    center: {
        flex: 1,
        alignItems: 'center'
    },
    leftJustify: {
        marginRight: 'auto'
    }
})