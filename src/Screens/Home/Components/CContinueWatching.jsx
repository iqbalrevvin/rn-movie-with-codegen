import React from 'react'
import {StyleSheet, View, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback, Dimensions} from 'react-native'
import CProgressBar from '../../../Components/Progress/CProgressBar'
import CText from '../../../Components/Text/CText'
import { COLORS, dummyData, icons } from '../../../Services/Constant'

const {width} = Dimensions.get('window')
const CContinueWatching = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <CText style={{ flex:1 }} size={22}>Continue Watching</CText>
                <Image source={icons.right_arrow} style={styles.iconSection} />
            </View>
            <FlatList horizontal showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.watchListContainer}
                data={dummyData.continueWatching}
                renderItem={({item,i}) => {
                    return(
                        <View>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', {selectedMovie: item})}>
                                <View style={styles.watchItemContainer(i, dummyData)}>
                                    {/* Start::Thumbnail */}
                                    <Image source={item.thumbnail} resizeMode='cover' style={styles.coverSection} />
                                    {/* Start::Name */}
                                    <CText style={{ marginTop:8 }} size={14}>{item.name}</CText>
                                    {/* Start::Progress Bar */}
                                    <CProgressBar containerStyle={{ marginTop:15}} barStyle={{ height:3 }} barPercentage={item.overallProgress} />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    )
                }} />
        </View>
    )
}

export default CContinueWatching

const styles = StyleSheet.create({
    container:{
        marginTop: 24
    },
    titleContainer:{
        flexDirection:'row',
        paddingHorizontal:24,
        alignItems:'center'
    },
    iconSection:{
        width:20,
        height:20,
        tintColor:COLORS.primary
    },
    watchListContainer:{
        marginTop:24
    },
    watchItemContainer:(index, dummyData) => ({
        marginLeft: index == 0 ? 24 : 20,
        marginRight: index == dummyData.continueWatching.length-1 ? 24 : 0
    }),
    coverSection:{
        width: width/3,
        height: (width/3)+60,
        borderRadius: 20
    }
})