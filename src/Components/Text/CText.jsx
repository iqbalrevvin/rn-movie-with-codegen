import React from 'react'
import {StyleSheet, Text} from 'react-native'

const CText = ({children, style, bold, color, size, numberOfLines}) => {
    return(
        <Text style={[style, styles.textSection(bold, color, size)]} numberOfLines={numberOfLines}>
            {children}
        </Text>
    )
}

export default React.memo(CText)

const styles = StyleSheet.create({
    textSection:(bold,color,size) => ({
        fontFamily:bold?'Lato-Bold':'Lato-Regular',
        fontWeight: bold?'bold':'normal',
        color:color||'white',
        fontSize: size||16
    })
})