import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

import { BottomTabNavigator } from './BottomTabNavigator'

import { useAuth } from '~hooks'
import {
  ApplicationInfoScreen,
  NotFoundScreen,
  SettingsScreen,
  SignInScreen,
  SignUpScreen,
} from '~screens'

const { Navigator, Screen, Group } = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator: FC = () => {
  const { isSignedIn } = useAuth()

  return (
    <Navigator>
      {!isSignedIn ? (
        <Group key="unauthorized">
          <Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          <Screen name="SignUp" component={SignUpScreen} />
        </Group>
      ) : (
        <Group key="authorized" screenOptions={{ headerLargeTitle: true }}>
          <Screen
            name="MainTab"
            component={BottomTabNavigator}
            options={{ headerTitle: 'Activité' }}
          />
          <Screen
            name="Settings"
            component={SettingsScreen}
            options={{ headerTitle: 'Paramètres' }}
          />
        </Group>
      )}
      <Group key="modals" screenOptions={{ presentation: 'modal' }}>
        <Screen
          name="ApplicationInfo"
          component={ApplicationInfoScreen}
          options={{ headerTitle: 'Infos' }}
        />
        <Screen name="NotFound" component={NotFoundScreen} />
      </Group>
    </Navigator>
  )
}
