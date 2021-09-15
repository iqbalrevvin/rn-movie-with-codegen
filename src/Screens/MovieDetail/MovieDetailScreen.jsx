import React, {Component} from 'react'
import {StyleSheet, View, ImageBackground, TouchableOpacity, Image, ScrollView, Dimensions, Platform} from 'react-native'
import CText from '../../Components/Text/CText'
import { COLORS, icons } from '../../Services/Constant'
import LinearGradient from 'react-native-linear-gradient'
import CProgressBar from '../../Components/Progress/CProgressBar'

const {height} = Dimensions.get('window')
class MovieDetailScreen extends Component {
    constructor(){
        super()
        this.state = {
            selectedMovie: null
        }
    }

    componentDidMount(){
        const {selectedMovie} = this.props.route.params
        this.setState({
            selectedMovie: selectedMovie
        })
    }

    render(){
        const {selectedMovie} = this.state
        const imageRequire = selectedMovie?.details?.image
        const imageUrl = selectedMovie?.image
        const season = selectedMovie?.details?.season ? selectedMovie.details.season : 'Season 1'
        const name = selectedMovie?.details?.name ? selectedMovie.details.name : selectedMovie?.title
        const age = selectedMovie?.details?.age ? selectedMovie?.details?.age : '16+'
        const rating = selectedMovie?.details?.ratings ? selectedMovie?.details?.ratings : selectedMovie?.imDbRating
        return(
            <View style={{ flex:1, backgroundColor:'black' }}>
                <ScrollView>
                    {/* Start::Header Cover */}
                    <ImageBackground source={selectedMovie?.details?.image ? imageRequire : {url: imageUrl}} resizeMode='cover' style={styles.headerContainer}>
                        <HeaderBar navigation={this.props.navigation}/>
                        <View style={{ flex:1, justifyContent:'flex-end' }}>
                            <LinearGradient style={styles.gradientSection} start={{ x:0, y:0 }} end={{ x:0, y:1 }} colors={['transparent', 'black']}>
                                <CText size={14}>{season}</CText>
                                <CText size={30} style={{marginTop:8}} bold>{name}</CText>
                            </LinearGradient>
                        </View>
                    </ImageBackground>
                    {/* End::Header Cover */}

                    {/* Start::Category & Rating */}
                        <View style={styles.catRatContainer}>
                            <View style={styles.catRatLabel}>
                                <CText>{age}</CText>
                            </View>
                            {selectedMovie?.details?.genre && (
                                <View style={styles.catRatLabel}>
                                    <CText>{selectedMovie?.details?.genre}</CText>
                                </View>
                            )}
                            <View style={styles.catRatLabel}>
                                <Image source={icons.star} resizeMode='contain' style={{ width:15, height:15, marginRight: 8 }} />
                                <CText>{rating}</CText>
                            </View>
                        </View>
                    {/* End:: Category & Rating */}

                    {/* Start:: Crew */}
                    {selectedMovie?.crew && (
                        <View style={styles.crewLabel}>
                            <CText>{selectedMovie?.crew}</CText>
                        </View>
                    )}
                    {/* End:: Crew */}
                    
                    {/* Start:: Movie Detail Information */}
                        <View style={styles.detailContainer}>
                            <View style={{ marginBottom:20 }}>
                                {/* Start:: Title & Running Time */}
                                <View style={{ flexDirection:'row' }}>
                                    <CText style={{ flex:1 }} size={14}>
                                        {selectedMovie?.details?.currentEpisode}
                                    </CText>
                                    <CText size={14} color={COLORS.lightGray}>
                                        {selectedMovie?.details?.runningTime}
                                    </CText>
                                </View>
                                {/* Start:: Progress Bar */}
                                {selectedMovie?.details?.progress && (
                                    <CProgressBar containerStyle={{ marginTop:24 }}
                                        barStyle={{ height:5, borderRadius:3 }}
                                        barPercentage={selectedMovie?.details?.progress}
                                    />
                                )}
                            </View>
                            {/* Start::Watch Button */}
                            <TouchableOpacity style={styles.buttonWatchContainer}>
                                <CText size={22}>{selectedMovie?.details?.progress !== '0%' && selectedMovie?.details?.progress ? 'CONTINUE WATCH' : 'WATCH NOW'}</CText>
                            </TouchableOpacity>
                        </View>
                    {/* End:: Movie Detail Information */}
                </ScrollView>
            </View>
        )
    }
}

// Start:: Render Header Bar Component
const HeaderBar = ({navigation}) => {
    return(
        <View style={stylesHeader.container}>
            {/* Start::Icon Back */}
            <TouchableOpacity style={stylesHeader.iconActionContainer} onPress={() => navigation.goBack()}>
                <Image source={icons.left_arrow} style={stylesHeader.iconActionSection} />
            </TouchableOpacity>
            {/* Start::Icon Share */}
            <TouchableOpacity style={stylesHeader.iconActionContainer} onPress={() => navigation.goBack()}>
                <Image source={icons.upload} style={stylesHeader.iconActionSection} />
            </TouchableOpacity>
        </View>
    )
}


export default MovieDetailScreen

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor:COLORS.gray1,
        width: '100%',
        height: height < 700 ? height * 0.6 : height * 0.7,
    },
    gradientSection:{
        width: '100%',
        height:150,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    catRatContainer:{
        flexDirection:'row',
        marginTop: 8,
        alignItems: 'center',
        justifyContent:'center'
    },
    catRatLabel:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 8,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 8,
        backgroundColor: COLORS.gray1,
    },
    crewLabel:{
        alignItems:'center',
        justifyContent:'center',
        top:25,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 8,
        backgroundColor: COLORS.gray1
    },
    detailContainer:{
        flex:1,
        paddingHorizontal:24,
        marginTop:24,
        justifyContent: 'space-around',
    },
    buttonWatchContainer:{
        height: 60,
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: Platform.OS === 'ios' ? 24*2 : 0,
        borderRadius: 15,
        backgroundColor: COLORS.primary
    }
})

const stylesHeader = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        paddingHorizontal: 24
    },
    iconActionContainer:{
        alignItems:'center',
        justifyContent:'center',
        width: 50,
        height:50,
        borderRadius: 20,
        backgroundColor: COLORS.transparentBlack
    },
    iconActionSection:{
        width: 20,
        height: 20,
        tintColor: COLORS.white
    }
})