import { StyleSheet, View } from 'react-native'
import React from 'react'
import Card from '@/ui/components/Card'

const LearnSection = () => {
  return (
    <View style={styles.container}>
          <Card subTitle="Learn about blood donation" onPress={() => { }} />
          <Card subTitle="Am I eligible to donate?" onPress={() => { }} />
    </View>
  )
}

export default LearnSection

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        gap: 20,
        marginVertical: 20,
        justifyContent: 'center',
        fontSize: 12
    }
})