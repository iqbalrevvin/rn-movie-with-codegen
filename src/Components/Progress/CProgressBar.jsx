import React from 'react'
import {StyleSheet, View} from 'react-native'
import { COLORS } from '../../Services/Constant'

const CProgressBar = ({containerStyle, barStyle, barPercentage}) => {
    return(
        <View style={{ ...containerStyle }}>
            <View style={styles.barNullSection(barStyle)}></View>
            <View style={styles.barFillSection(barStyle, barPercentage)}></View>
        </View>
    )
}

const compare = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}

export default React.memo(CProgressBar, compare)

const styles = StyleSheet.create({
    barNullSection: (barStyle) => ({
        position:'absolute',
        bottom:0,
        left:0,
        width: '100%',
        marginTop:8,
        backgroundColor:COLORS.gray,
        ...barStyle
    }),
    barFillSection: (barStyle, barPercentage) => ({
        position:'absolute',
        bottom:0,
        left:0,
        marginTop:8,
        width: barPercentage,
        backgroundColor:COLORS.primary,
        ...barStyle
    })
})