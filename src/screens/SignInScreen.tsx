import { Divider, HStack, VStack, Text } from 'native-base'

import { Button } from '~components'
import SignInWithAppleButton from '~components/SignInWithAppleButton'
import SignInWithGoogleButton from '~components/SignInWithGoogleButton'
import standardStyle from '~styles/standard'

export const SignInScreen = (): JSX.Element => {
  // const { signIn } = useAuth()
  // const { s } = useTheme()

  return (
    <VStack bgColor={'black'} flex={1} alignContent={'center'} justifyContent={'center'}>
      <VStack mb="10" my="3" flex={1} alignItems={'center'} justifyContent={'flex-end'}>
        <Text
          ml="5"
          fontSize="5xl"
          color={'white'}
          style={standardStyle.title}
          alignSelf={'flex-start'}
        >
          Starter
        </Text>

        <Text
          ml="5"
          fontSize="xl"
          color={'white'}
          style={standardStyle.subtitle}
          alignSelf={'flex-start'}
        >
          Login now
        </Text>
        <SignInWithAppleButton onPress={console.log} />
        <SignInWithGoogleButton onPress={console.log} />
        <HStack mt="2" space="4" alignItems={'center'}>
          <Divider w={'150'} />
          <Text fontSize="xl" color={'white'} style={standardStyle.subtitle} alignSelf={'center'}>
            ou
          </Text>
          <Divider w={'150'} />
        </HStack>
        <VStack mt="3">
          <Button name="Continuer avec mon e-mail" onPress={console.log} />
        </VStack>
      </VStack>
    </VStack>
  )
}
