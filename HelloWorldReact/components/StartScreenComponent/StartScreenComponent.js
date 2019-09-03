/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict'

import React                                                         from 'react'
import { Button, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

export default class StartScreenComponent extends React.Component {
  render () {
    return (
      <View style={styles.fullBackground}>
        <Image
          style={styles.logo}
          accessibilityRole={'image'}
          source={require('../../assets/beebee.png')}>
        </Image>
        <View>
          <Text h1 style={styles.title}>Welkom!</Text>
          <Text style={styles.welcomeText}>Met 300 gesprekspartners om te ontmoeten, verbindt BeeBuzz AE medewerkers met
            elkaar.. Neem een
            selfie, krijg een match en doe de challenge.</Text>
        </View>
        <TouchableHighlight
          style={styles.button}>
          <Button
            buttonStyle={styles.button}
            onPress={() => this.props.navigation.navigate('Other')}
            title="I'm In"
            color={Colors.primary}
            accessibilityLabel="Learn more about this purple button"/>
        </TouchableHighlight>
      </View>
    )
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
      opacity: 1,
      overflow: 'hidden',
      resizeMode: 'contain',
      width: '50%',
      alignSelf: 'center'
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
    }
  })
