import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        { //Single Object
          uid: 1, //key pair values (uid = key, 1 = value)
          name: 'Ivan Tong',
          status: 'Saving lives at UTD',
          imageLocation: require('/Users/khoi/react-native/styler02/assets/teamMembersPics/IMG_6894.jpg')
        },
        {
          uid: 2,
          name: 'Khoi Do',
          status: 'Building his shadow empire',
          imageLocation: require('/Users/khoi/react-native/styler02/assets/teamMembersPics/IMG_6110.jpg')
        },
        {
          uid: 3,
          name: 'Nathan Bucasas',
          status: 'Saving the world from economic collapse',
          imageLocation: require('/Users/khoi/react-native/styler02/assets/teamMembersPics/IMG_7989.jpg')
        },
        {
          uid: 4,
          name: 'Robert Nguyen',
          status: 'Starting his samurai career at Jinya',
          imageLocation: require('/Users/khoi/react-native/styler02/assets/teamMembersPics/IMG_2668.jpg')
        },
        {
          uid: 6,
          name: 'David Nguyen',
          status: 'Currently going on a date with Malena',
          imageLocation: require('/Users/khoi/react-native/styler02/assets/teamMembersPics/70587534449__483B71B3-BC9C-4FA4-86E4-2D85EDE1DB03.jpg')
        },
        {
          uid: 7,
          name: 'Max Young',
          status: 'Currently making your next Chat GPT',
          imageLocation: require('/Users/khoi/react-native/styler02/assets/teamMembersPics/max.png')
        },
        {
          uid: 8,
          name: 'Preston Tong',
          status: 'Sightseeing Capybaras',
          imageLocation: require('/Users/khoi/react-native/styler02/assets/teamMembersPics/preston.png')
        }
      ];

      contacts.map((contact) => {console.log(contact.imageLocation)})

      /*
      console.log(contacts.map((contact) => (contact.name + ", status: " + contact.status)));
      console.log(contacts.map((contact) => (contact.uid)));

      // anonymous function: (contact) => (contact.name + ", status: " + contact.status)
      var myFunc = (contact : Object) => (contact + ", status: " + contact);

      myFunc(contacts[0]);

      // some code here
      sendPacket().then((response) => {
        // do some work with response
        sendPacket().then((response2) => {
          // do some more work with response2
        });
        
      });
      */

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map((information) => (
          <View key={information.uid} style={styles.userCard} removeClippedSubviews = {true}>
            <Image
              source={information.imageLocation}
              style={styles.userImage}
              onError = {(error) => {
                console.log(error)
              }}
            /> 
            <View>
              <Text style={styles.userName}>{information.name}</Text>
              <Text style={styles.userStatus}>{information.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

// {contacts.map(lambda above)}:
// {[<View key = 1></View>, <View key = 2></View>]}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: '#000000'
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 8
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#2c3e50',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12,
        color: '#ffffff'
    }
})