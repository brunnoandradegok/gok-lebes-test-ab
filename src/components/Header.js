import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import B from './Bold'

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Ferramenta de Teste A/B 🧪👨🏻‍🔬
    </Text>
    <Text style={styles.description}>
      Olá! Este é um projeto de demonstração para mostrar o poder das
      Ferramentas de <B>Teste A/B</B> e <B>Configuração Remota</B> do Firebase
      com React Native.
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    margin: 24
  },
  title: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: '700',
    color: Colors.black
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  }
})

export default Header