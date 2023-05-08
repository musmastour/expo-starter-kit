# @expo-start-kit

This is a template to be used with expo. It includes all the necessary stuff to start working with expo framework. It has the most popular packages included so it's easier to start coding the app itself without all the necessary boilerplate setup. It has:

Version in the `package.json` is one to one the latest expo on which the template was tested.

## Features

[![MIT License](https://img.shields.io/npm/types/@kacgrzes/expo-template?style=flat-square)](https://img.shields.io/npm/types/@kacgrzes/expo-template?style=flat-square)
[![MIT License](https://img.shields.io/github/package-json/dependency-version/kacgrzes/expo-typescript-template/expo?style=flat-square)](https://img.shields.io/github/package-json/dependency-version/kacgrzes/expo-typescript-template/expo?style=flat-square)
[![MIT License](https://img.shields.io/github/package-json/dependency-version/kacgrzes/expo-typescript-template/@react-navigation/native?style=flat-square)](https://img.shields.io/github/package-json/dependency-version/kacgrzes/expo-typescript-template/@react-navigation/native?style=flat-square)

- Expo
- React Query
- React Navigation
  - with dark and light theme set up
  - with screen tracking hook
  - state persistance on development mode
  - prevent go back (to be used on forms for example)
- color scheme detection (dark / light mode toggle)
- hermes enabled on Android by default
- wait to load fonts and all the assets
- auth flow ready for implementation details
  - using expo-secure-store module to save user token
  - right now it has simple signIn/signOut flow
- prettier
- babel-module-resolver
- tests with jest and @testing-library/react-native

## Run Locally

Clone the project

```bash
  git clone https://github.com/musmastour/expo-starter-kit.git
```

Go to the project directory

```bash
  cd expo-starter-kit
```

Install dependencies

```bash
  yarn
```

Start the expo server

```bash
  yarn start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Feedback

If you have any feedback, please reach out to me at kacgrzes@gmail.com

## Contributors

- [@kacgrzes](https://www.github.com/kacgrzes)
- [@MateuszRostkowski](https://www.github.com/MateuszRostkowski)
