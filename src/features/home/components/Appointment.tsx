import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InfoRow from '@/ui/components/InfoRow'
import { images } from '@/utils/images';

const Appointment = () => {

  return (
    <View style={styles.container}>
      <InfoRow
        icon={images.cal}
        primary=""
        title="Schedule Your First Donation"
        secondary="Haven`t your donated Blood before?"
        onPress={() => {/* open map */ }}
      />

      <InfoRow
        icon={images.setlastdonation}
        primary=""
        title="Set Your a regular blood before?"
        secondary="Are you a regular blood Donor?"
        onPress={() => {/* open map */ }}
      />

    </View>
  )
}

export default Appointment

const styles = StyleSheet.create({
    container: {
      gap: 20
    }
})