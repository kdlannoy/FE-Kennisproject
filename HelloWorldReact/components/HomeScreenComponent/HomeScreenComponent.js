import React                                                         from 'react'
import { Button, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Colors }                                                    from 'react-native/Libraries/NewAppScreen'
import ImagePicker                                                   from 'react-native-image-picker'
import firebase                                                      from 'react-native-firebase'

export default class HomeScreenComponent extends React.Component {

  constructor () {
    super()
    this.ref = firebase.firestore().collection('images')
  }

  componentDidMount () {
    this.setState({ avatarSource: undefined })
  }

  render () {
    return (
      <View style={styles.fullBackground}>
        <Image style={styles.logo}
               source={require('../../assets/beebee.png')}>
        </Image>
        <View style={styles.content}>
          <Text h1 style={styles.title}>
            You are in!
          </Text>
          <Text style={styles.welcomeText}>
            Ah, meedoen? Heel goed!{'\n'}
            ... butt first, let's make a gay joke!{'\n'}
            And let's take a selfie!
          </Text>
          <View style={styles.avatarImage}>
            {(this.state && this.state.avatarSource) ?
             <Image style={{ resizeMode: 'contain', flex: 1, width: 100, alignSelf: 'center' }}
                    source={this.state.avatarSource}/> : <Text>No!</Text>
            }
          </View>

          {(this.state && this.state.avatarSource) ?
           <TouchableHighlight
             style={styles.button}>
             <Button
               buttonStyle={styles.button}
               onPress={() => this.submitToDb()}
               title="Submit it to the db!"
               color={Colors.primary}/>
           </TouchableHighlight> :

           <TouchableHighlight
             style={styles.button}>
             <Button
               buttonStyle={styles.button}
               onPress={() => this.takeAPicture()}
               title="Lemme take a selfie!"
               color={Colors.primary}
               accessibilityLabel="Learn more about this purple button"/>
           </TouchableHighlight>
          }


        </View>
      </View>
    )
  }

  takeAPicture () {
    ImagePicker.showImagePicker(cameraOptions, (response) => {
      if (response.didCancel) {
        alert('User cancelled image picker')
      } else if (response.error) {
        alert('ImagePicker Error: ', JSON.stringify(response.error))
      } else {
        const source = { uri: response.uri }
        this.setState({ avatarSource: source })

      }
    })
  }

  submitToDb () {
    this.ref
        .add({
               description: this.state.avatarSource
             })
        .then((res) => {
          this.setState({ avatarSource: undefined })
          this.props.navigation.navigate('Home')
        })
  }
}

// More info on all the options is below in the API Reference... just some common use cases shown here
const cameraOptions = {
  title: 'Select a picture of yourself',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

const styles = StyleSheet.create(
  {
    fullBackground: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: Colors.dark
    },
    logo: {
      flex: 1,
      opacity: 1,
      overflow: 'hidden',
      resizeMode: 'contain',
      width: '25%',
      alignSelf: 'center'
    },
    content: {
      flex: 3
    },
    title: {
      fontSize: 40,
      fontWeight: '600',
      textAlign: 'center',
      color: Colors.primary
    },
    welcomeText: {
      fontSize: 20,
      color: Colors.lighter,
      fontWeight: '400',
      textAlign: 'left',
      paddingLeft: 24
    },
    button: {
      width: '50%',
      alignSelf: 'center',
      justifyContent: 'flex-end',
      flex: 1,
      paddingBottom: 12
    },
    avatarImage: {
      width: '80%',
      flex: 1,
      alignSelf: 'center',
      paddingTop: 50
    }
  })

