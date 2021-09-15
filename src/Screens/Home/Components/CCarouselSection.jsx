import React, { Fragment, useState } from 'react'
import { StyleSheet, Animated, FlatList, View, Dimensions, TouchableWithoutFeedback, ImageBackground, Image } from 'react-native'
import CText from '../../../Components/Text/CText'
import { COLORS, dummyData, icons } from '../../../Services/Constant'
import CDotSlide from './CDotSlide'


const { width } = Dimensions.get('window')

const CCarouselSection = ({ navigation }) => {
    const carouselScrollX = React.useRef(new Animated.Value(0)).current
    return (
        <Fragment>
            <Animated.FlatList contentContainerStyle={styles.container} horizontal pagingEnabled snapToAlignment='center'
                snapToInterval={width} showsHorizontalScrollIndicator={false} scrollEventThrottle={16}
                decelerationRate={0} data={dummyData.corouselData} keyExtractor={item => `${item.id}`}
                onScroll={Animated.event([
                    {
                        nativeEvent: { contentOffset: { x: carouselScrollX } }
                    }
                ], { useNativeDriver: false })}
                renderItem={(({ item, i }) => {
                    return (
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', { selectedMovie: item })}>
                            <View style={styles.posterSlideContainer}>
                                {/* <CText>{JSON.stringify(item)}</CText> */}
                                <ImageBackground source={item.thumbnail} resizeMode='cover'
                                    style={styles.posterSlideSection} imageStyle={{ borderRadius: 40 }}>
                                    <View style={styles.posterInfoContainer}>
                                        {/* Start::Play Now Section */}
                                        <View style={styles.playNowContainer}>
                                            <View style={styles.playNowSection}>
                                                <Image source={icons.play} resizeMode='contain' style={styles.playIconSection} />
                                            </View>
                                            <CText style={styles.playTextSection} bold>Play Now</CText>
                                        </View>
                                        {/* End::Play Now Section */}
                                        {/* Start::Still Watching */}
                                        {item.stillWatching.length > 0 && (
                                            <View style={{ justifyContent: 'center' }}>
                                                <CText style={styles.playTextSection}>Still Watching</CText>
                                                <ProfileList data={item.stillWatching} />
                                            </View>
                                        )}
                                        {/* End::Still Watching */}
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            >
            </Animated.FlatList>
            <CDotSlide carouselScrollX={carouselScrollX} />
        </Fragment>
    )
}

const ProfileList = ({ data }) => {
    if (data.length <= 3) {
        return (
            <View style={stylesProfile.container}>
                {data.map((item, i) => (
                    <View key={i} style={i === 0 ? null : { marginLeft: 0 }}>
                        <Image source={item.profile} resizeMode='cover' style={stylesProfile.profileImage} />
                    </View>
                ))}
            </View>
        )
    }
    return (
        <View style={stylesProfile.container}>
            {data.map((item, i) => {
                if (i <= 2) {
                    return (
                        <View key={i} style={i === 0 ? null : { marginLeft: -15 }}>
                            <Image source={item.profile} resizeMode='cover' style={stylesProfile.profileImage} />
                        </View>
                    )
                }
            })}
            <CText style={{ marginLeft: 8 }} size={14}>
                +{data.length - 3}
            </CText>
        </View>
    )
}

export default CCarouselSection

const styles = StyleSheet.create({
    container: {
        marginTop: 12
    },
    posterSlideContainer: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    posterSlideSection: {
        width: width * 0.85,
        height: width * 0.85,
        justifyContent: 'flex-end'
    },
    posterInfoContainer: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        marginBottom: 12,
        paddingHorizontal: 12,
    },
    playNowContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    playNowSection: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.transparentWhite
    },
    playIconSection: {
        width: 15,
        height: 15,
        tintColor: COLORS.white
    },
    playTextSection: {
        marginLeft: 8,
    }
})

const stylesProfile = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: COLORS.black
    }
})