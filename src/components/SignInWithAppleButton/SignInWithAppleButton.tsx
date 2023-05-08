import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import styles from './styles'

function SignInWithAppleButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="apple" type="font-awesome" color={'white'} />
      <Text style={styles.text}>Connexion avec Apple</Text>
    </TouchableOpacity>
  )
}

export default SignInWithAppleButton
