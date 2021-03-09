import React from 'react'
import { ScrollView, Text } from 'react-native'
import Header from './components/Header'
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
import { fetchConfig } from './services/firebase'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Link from './components/Link'
import RefreshConfig from './components/RefreshConfig'

fetchConfig().catch(console.log)

const Stack = createStackNavigator();

const navStyle = {
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  headerBackTitle: 'Back'
}

const Home = ({ navigation }) => (
  <ScrollView>
    <Header/>
    <RefreshConfig/>
    <Link text='Teste #1' press={() => navigation.navigate('test1')} testID='test1-link'/>
    <Link text='Teste #2' press={() => navigation.navigate('test2')} testID='test2-link'/>
    <Link text='Teste #3' press={() => navigation.navigate('test3')} testID='test3-link'/>
  </ScrollView>
)

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='home' component={Home} options={{
          title:'Experimentos',
          ...navStyle
        }}/>
        <Stack.Screen name='test1' component={Test1} options={{
          title:'Teste #1',
          ...navStyle
        }}/>
        <Stack.Screen name='test2' component={Test2} options={{
          title:'Teste #2',
          ...navStyle
        }}/>
        <Stack.Screen name='test3' component={Test3} options={{
          title:'Teste #3',
          ...navStyle
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App