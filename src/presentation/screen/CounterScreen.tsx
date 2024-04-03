import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '../components'
import { Button } from 'react-native-paper'

interface Props{
    number? : number
}

export const CounterScreen = ({number = 0} : Props) => {

const [count, setCount] = useState(number)

const sumar = () => {
    setCount(count+1)
}

return (
    <View style={styles.container}>
        <Text style={styles.title}>{count}</Text>

        {/* <PrimaryButton 
        label='Incrementar' 
        onPress={sumar} 
        onLongPress={() => setCount(0)}/> */}

        <Button
        mode='contained'
        onPress={sumar} 
        onLongPress={() => setCount(0)}
        >
            Incrementar
        </Button>


    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:80,
        fontWeight:"300",
        color:'black'
    },
})
