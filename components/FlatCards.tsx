import React from 'react'
import {
    Image,
    StyleSheet, Text, View
} from 'react-native'

function FlatCards() {
    return(
        <View>
            <View style= {styles.headingContainer}>
            <Text style= {styles.headingText}>TNG</Text>
            <Image
                style= {styles.headingLogo}
                source= {{uri: 'https://st2.depositphotos.com/2195902/12426/v/450/depositphotos_124267722-stock-illustration-angry-gorilla-symbol.jpg'}} 
                />
            </View>
            <View style= {styles.container}>
                <View>
                    <Text style= {styles.headingText2}>Team Members</Text>
                </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    headingText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#000000',
    },
    headingLogo:{
        width: 100,
        height: 50
    },
    headingContainer: {
        flex: 1,
        alignItems: 'center',
        color: '#000000',
    },
    container : {
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    headingText2:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },
    textColor: {
        color: '#000000'
    }
})

export default FlatCards