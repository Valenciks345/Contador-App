import React, { useState } from 'react'
import {StyleSheet, Text, View } from 'react-native'
import {globalStyles} from '../theme/global.styles'
import { FAB } from 'react-native-paper'


interface Props{
    number? : number
}

export const CounterM3Screen = ({number = 0} : Props) => {

const [count, setCount] = useState(number)

const sumar = () => {
    setCount(count+1)
}

const restar = () => {
    if (count > 0){
        setCount(count-1)
    }
}

return (
    <View style={globalStyles.centerContainer}>
        <Text style={globalStyles.title}>{count}</Text>

        <FAB
        icon="add"
        style={styles.fabRight}
        onPress={sumar}
        onLongPress={() => setCount(0)}
        />

        <FAB
        icon="remove"
        style={styles.fabLeft}
        onPress={restar}
        onLongPress={() => setCount(0)}
        />


    </View>
)
}

const styles = StyleSheet.create({
    fabRight:{
        position:'absolute',
        margin:16,
        right:0,
        bottom:15
    },
    fabLeft:{
        position:'absolute',
        margin:16,
        left:0,
        bottom:15
    }
})
