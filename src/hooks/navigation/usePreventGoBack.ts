import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { Alert } from 'react-native'

export const usePreventGoBack = (shouldPrevent = true): void => {
  const navigation = useNavigation()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const callback = (event: any) => {
      if (!shouldPrevent) {
        return
      }

      event?.preventDefault()

      Alert.alert(
        'Discard changes?',
        'You have unsaved changes. Are you sure to discard them and leave the screen?',
        [
          { text: "Don't leave", style: 'cancel', onPress: () => undefined },
          {
            text: 'Discard',
            style: 'destructive',
            onPress: () => navigation.dispatch(event?.data?.action),
          },
        ]
      )
    }

    navigation.addListener('beforeRemove', callback)

    return () => navigation.removeListener('beforeRemove', callback)
  }, [navigation, shouldPrevent])
}
