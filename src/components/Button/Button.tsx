import { useTheme } from '@react-navigation/native'
import * as Haptics from 'expo-haptics'
import { Text, HStack } from 'native-base'
import React from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import standardStyle from '~styles/standard'

interface ButtonProps {
  onPress: () => void
  name: string
  icon?: string
  color?: string
  textColor?: string
  buttonContentColor?: string
  iconType?: string
  isLoading?: boolean
}

function GenericButton({
  onPress,
  name,
  icon,
  color,
  buttonContentColor,
  isLoading = false,
  iconType = 'material',
}: ButtonProps) {
  const { colors } = useTheme()

  const buttonColor = color ?? colors.primary
  const contentColor = buttonContentColor ?? colors.background

  const onPressButton = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    onPress()
  }

  return (
    <TouchableOpacity onPress={onPressButton}>
      <HStack
        bgColor={buttonColor}
        justifyContent="center"
        p="2"
        rounded="lg"
        mt="2"
        space={1}
        alignItems={'center'}
      >
        {icon && <Icon name={icon} type={iconType} color={contentColor} size={20} />}
        {!isLoading && (
          <Text color={contentColor} style={standardStyle.text} fontSize="md">
            {name}
          </Text>
        )}
        {isLoading && <ActivityIndicator color={contentColor} />}
      </HStack>
    </TouchableOpacity>
  )
}

export default GenericButton
