import React from 'react'
import {Animated, Dimensions, StyleSheet, View} from 'react-native'
import { COLORS, dummyData } from '../../../Services/Constant'

const {width} = Dimensions.get('window')
const CDotSlide = ({carouselScrollX}) => {
    const dotPosition = Animated.divide(carouselScrollX, width)
    return(
        <View style={styles.container}>
            {dummyData.corouselData.map((_,i) => {
                const opacity = dotPosition.interpolate({
                    inputRange: [i-1, i, i+1],
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp'
                })

                const dotWidth = dotPosition.interpolate({
                    inputRange: [i-1, i, i],
                    outputRange: [6, 20, 6],
                    extrapolate: 'clamp'
                })

                const dotColor = dotPosition.interpolate({
                    inputRange: [i-1, i, i+1],
                    outputRange: [COLORS.lightGray, COLORS.primary, COLORS.lightGray],
                    extrapolate: 'clamp'
                })

                return(
                    <Animated.View key={i} opacity={opacity} style={styles.dotSection(dotWidth, dotColor)} />
                )
            })}
        </View>
    )
}

const compare = (prevState, nextState) => {
    return JSON.stringify(prevState) === JSON.stringify(nextState)
}

export default React.memo(CDotSlide, compare)

const styles = StyleSheet.create({
    container:{
        marginTop: 24,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    dotSection:(width, color) => ({
        borderRadius: 12,
        marginHorizontal:3,
        width:width,
        height:6,
        backgroundColor:color
    })
})