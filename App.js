import React, { useEffect } from 'react'
import { PermissionsAndroid, StatusBar, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './src/pages/Home'
import AddContent from './src/pages/AddContent'

export default function App({ navigation }) {
  const requestStoragePermission = async () => {
    await PermissionsAndroid.requestMultiple([
      'android.permission.READ_EXTERNAL_STORAGE',
      'android.permission.WRITE_EXTERNAL_STORAGE'
    ])
  }

  useEffect(() => {
    requestStoragePermission()
  }, [])

  const Stack = createStackNavigator()

  const MyTheme = {
    dark: true,
    colors: {
      background: '#292929'
    },
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar barStyle="light-content" backgroundColor="#e04924" />

      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddContent" component={AddContent} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
