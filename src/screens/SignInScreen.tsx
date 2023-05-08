import { Divider, HStack, VStack, Text } from 'native-base'

import SignInWithAppleButton from '~components/SignInWithAppleButton'
// import { useAuth, useTheme } from '~hooks'

export const SignInScreen = (): JSX.Element => {
  // const { signIn } = useAuth()
  // const { s } = useTheme()

  return (
    <VStack flex={1} alignContent={'center'} justifyContent={'center'}>
      <VStack mb="10" my="3" flex={1} alignItems={'center'} justifyContent={'flex-end'}>
        <Text ml="5" fontSize="xl" alignSelf={'flex-start'}>
          Organise tes matchs entre amis
        </Text>
        <Text ml="5" fontSize="5xl" alignSelf={'flex-start'}>
          Organise tes matchs entre amis
        </Text>
        {<SignInWithAppleButton onPress={console.log} />}
        <HStack mt="2" space="4" alignItems={'center'}>
          <Divider w={'150'} />
          <Text fontSize="xl" fontWeight={'bold'} alignSelf={'center'}>
            ou
          </Text>
          <Divider w={'150'} />
        </HStack>
      </VStack>
    </VStack>
  )
}
