import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '@/ui/components/Card'
import { images } from '@/utils/images'
import { useNavigation } from '@react-navigation/native'

const FeatureGrid = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Card title="Donate Now" bodyImage={images.blooddonate} onPress={() => { navigation.navigate('DonateBlood') }} />
      <Card title="Need Blood" bodyImage={images.bloodneed} onPress={() => { }} />
    </View>
  )
}

export default FeatureGrid

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    gap: 20,
    marginVertical: 20,
    justifyContent: 'center'
  }
})