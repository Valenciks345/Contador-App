import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface Props {
    label: string,
    onPress?: () => void,
    onLongPress?: () => void
}

export const PrimaryButton = ({label,onPress,onLongPress} : Props) => {

  return (
    <Pressable style={({pressed}) => [
        styles.button,
        pressed && styles.buttonPressed
    ]}
    onPress={onPress}
    onLongPress={onLongPress}>
        <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#5856D6',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10
    },
    buttonText:{
        color:'#fff'
    },
    buttonPressed:{
        backgroundColor:'#4746AB'
    }
})
