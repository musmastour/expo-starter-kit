import * as Haptics from 'expo-haptics'
import { Text, HStack } from 'native-base'
import React from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import { useTheme } from '~hooks'
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

export const Button = ({
  onPress,
  name,
  icon,
  color,
  buttonContentColor,
  isLoading = false,
  iconType = 'material',
}: ButtonProps): JSX.Element => {
  const { colors } = useTheme()

  const buttonColor = color ?? colors.background
  const contentColor = buttonContentColor ?? colors.text

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
        space={1}
        width={'full'}
        alignItems={'center'}
      >
        {icon && <Icon name={icon} type={iconType} color={contentColor} size={20} />}
        {!isLoading && (
          <Text color={contentColor} style={standardStyle.subtitle} fontSize="md">
            {name}
          </Text>
        )}
        {isLoading && <ActivityIndicator color={contentColor} />}
      </HStack>
    </TouchableOpacity>
  )
}

export default Button
