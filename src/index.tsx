// FIXME: see how why did you render works
// import './wdyr'
import 'react-native-gesture-handler'
import 'react-native-reanimated'
import '~i18n'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { registerRootComponent } from 'expo'
import { NativeBaseProvider } from 'native-base'
import { QueryClientProvider, QueryClient } from 'react-query'

import { AppLoading } from '~components'
import { useFonts } from '~hooks'
import { Navigation } from '~navigation'
import { AuthProvider, SafeAreaProvider } from '~providers'
import { ColorSchemeProvider } from '~providers/ColorSchemeProvider'
import { startMockedServer } from '~services'

// FIXME: there is some issue with miragejs that causes console.log to not work
const DISABLE_CONSOLE_ENABLE_MOCKED_SERVER = false

if (DISABLE_CONSOLE_ENABLE_MOCKED_SERVER) {
  startMockedServer()
}

const queryClient = new QueryClient({})

const App = (): JSX.Element => {
  useFonts({
    SpaceGrotesk: require('../assets/fonts/SpaceGrotesk.ttf'),
    SpaceGroteskMedium: require('../assets/fonts/SpaceGrotesk-Medium.otf'),
    SpaceGroteskBold: require('../assets/fonts/SpaceGrotesk-SemiBold.otf'),
  })

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <AppLoading>
              <ColorSchemeProvider>
                <BottomSheetModalProvider>
                  <Navigation />
                </BottomSheetModalProvider>
              </ColorSchemeProvider>
            </AppLoading>
          </AuthProvider>
        </QueryClientProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  )
}

registerRootComponent(App)

export default App
