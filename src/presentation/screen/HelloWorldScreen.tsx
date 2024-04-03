import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    name?: string
}

export const HelloWorldScreen = ({name = 'World'} : Props) => {
return (
    <View style={styles.container}>
        <Text numberOfLines={1} style={styles.title}>Hello, {name}</Text>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        padding:20
    },
    title:{
        fontSize:40,
        textAlign:"center",
        color:'black'
    }
}) 


