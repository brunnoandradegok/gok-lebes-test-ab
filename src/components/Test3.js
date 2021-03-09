import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { getRemoteValue } from '../services/firebase'
import B from './Bold'

const Test3 = () => {
  const { text, color } = JSON.parse(getRemoteValue('experiment_3'))
  return (
    <ScrollView testID='test3-screen'>
      <View style={styles.container}>
        <Text style={styles.title}>Color / Text 🎨</Text>
        <Text style={styles.description}>
          Excelente! Finalmente, vamos tentar outra maneira, vamos usar diretamente o valor
          em <B>Configuração Remota</B>. Aqui você verá um retângulo com o
          cor e texto que vêm do Firebase.
        </Text>
        <Text style={styles.description}>
          As variantes são <B>Vermelho</B>, <B>Azul</B> e <B>Verde</B>.
        </Text>
        <View style={[styles.rectangle, {backgroundColor: color}]}>
          <Text style={styles.rectangleText}>
            <B>{text}</B>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

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
  },
  rectangleText: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white
  },
  rectangle: {
    width: 144,
    height: 72,
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8
  }
})

export default Test3