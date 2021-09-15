import React, {Fragment} from 'react'
import { Dimensions, Pressable, StyleSheet, View, Image } from 'react-native'
import { COLORS, icons } from '../Services/Constant'
import CText from './Text/CText'
import Icon from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('window')
const CMovieItem = ({ type, containerStyle, onPress, image, title, rating, year, rank, wrap }) => {
    return (
        <Fragment>
            <Pressable onPress={onPress}>
                {type == 1 && (
                    <View style={{...containerStyle}}>
                        <View style={styles.ratingIconContainer}>
                            <View style={styles.ratingSection}>
                                <Image source={icons.star} style={{ width:15, height:15, marginRight:5}} />
                                <CText>8.7</CText>
                            </View>
                        </View>
                        {/* Start::Thumbnail */}
                        <Image source={{ url: image }} resizeMode='cover' style={styles.coverSection(wrap)} />
                        {/* Start::Name */}
                        <CText style={[styles.titleSection, {width:width/3}]} size={14} numberOfLines={2}>{title}</CText>
                    </View>
                )}
                {type == 2 && (
                    <View style={[styles.container(rank)]}>
                        {/* Start::Thumbnail odd */}
                            <Image source={{ url: image }} resizeMode='cover' style={styles.coverSection(wrap)} />
                        {/* Start::Information */}
                        <View style={styles.infoContainer}>
                            <View style={{ padding:10 }}>
                                <CText style={styles.titleSection} size={18} numberOfLines={1} bold>{title}</CText>
                                <CText style={styles.titleSection} size={18} numberOfLines={1} bold>{year}</CText>
                                <CText style={styles.titleSection} size={18} numberOfLines={1} >Rank: {rank}</CText>
                            </View>
                            <View style={{ padding:10 }}>
                                <View style={{ flexDirection:'row', alignItems:'center'}}>
                                    <Icon name='star' size={14} color='orange' style={{ marginTop:8, marginRight:5 }} />
                                    <CText style={styles.titleSection} size={18} numberOfLines={1}>{rating}</CText>
                                </View>
                                <CText style={styles.titleSection} size={14} numberOfLines={2}>{title}</CText>
                            </View>
                        </View>
                    </View>
                )}
            </Pressable>
        </Fragment>
    )
}

CMovieItem.defaultProps = {
    type: 1,
    onPress: () => alert('On Press Item'),
    id:1,
    image: 'https://imdb-api.com/images/original/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg',
    title: 'The Movie THe Movie The Movie'
}

export default React.memo(CMovieItem)

const styles = StyleSheet.create({
    container: (rank) => ({
        flexDirection: rank % 2 == 1 ? 'row' : 'row-reverse',
    }),
    coverSection:(wrap)=>({
        backgroundColor:COLORS.transparentWhite,
        width: wrap?width/2.5:width/3,
        height: wrap?(width/2.5)+60:(width/3)+60,
        borderRadius: 20
    }),
    ratingIconContainer:{
        zIndex: 99,
        position:'absolute',
        alignItems:'center',
        top:0,
        bottom:0,
        left:100,
        right:0
    },  
    ratingSection:{
        width:50,
        alignItems:'center',
        padding:5,
        borderRadius:10,
        flexDirection:'row',
        backgroundColor:COLORS.transparentBlack,
    },
    titleSection:{
        marginTop: 8
    },
    infoContainer:{
        backgroundColor:'transparent',
        flex:1,
        justifyContent:'space-between'
    }
})