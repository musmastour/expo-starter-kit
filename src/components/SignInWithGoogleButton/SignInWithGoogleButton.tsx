import { Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import styles from './styles'

import standardStyle from '~styles/standard'

function SignInWithGoogleButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="google" type="font-awesome" color={'white'} />
      <Text ml="3" fontSize={'lg'} color={'white'} style={standardStyle.subtitle}>
        Connexion avec Google
      </Text>
    </TouchableOpacity>
  )
}

export default SignInWithGoogleButton
