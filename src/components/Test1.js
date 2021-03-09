import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import B from './Bold'
import { images } from '../images/images'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { getRemoteValue } from '../services/firebase'

const Test1 = () => {
  const experiment = getRemoteValue('experiment_1')
  const variants = {
    mario: <Image source={images.mario} style={styles.image} resizeMode='contain'/>,
    luigi: <Image source={images.luigi} style={styles.image} resizeMode='contain'/>
  }
  return (
    <ScrollView testID='test1-screen'>
      <View style={styles.container}>
        <Text style={styles.title}>Mario & Luigi 🍄</Text>
        <Text style={styles.description}>
          Neste vamos testar uma imagem! Se você vir <B>Mario</B>, está no <B>Grupo de Controle</B>,
          caso contrário, se você vir <B>Luigi</B>, você está na <B>Variante A</B>.
        </Text>
        {!!experiment ? variants.luigi : variants.mario}
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
  image: {
    marginTop: 48,
    width: 144,
    height: 144,
    alignSelf: 'center'
  }
})

export default Test1