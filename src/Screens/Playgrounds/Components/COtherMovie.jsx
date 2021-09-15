import React from 'react'
import {StyleSheet, View} from 'react-native'
import CMovieItem from '../../../Components/CMovieItem'
import CText from '../../../Components/Text/CText'

const COtherMovie = ({navigation, data, loading}) => {
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <CText color='white' size={20}>Other Movies</CText>
            </View>
            <View style={styles.movieContentContainer}>
                {data.map((item,i) => {
                    return(
                        <View key={i}>
                            <CMovieItem wrap title={item.title} image={item.image} containerStyle={styles.containerMovieItem} 
                                onPress={() => navigation.navigate('Detail', {selectedMovie: item})} />
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const compare = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}

export default React.memo(COtherMovie, compare)

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    titleContainer: {
        paddingHorizontal: 25,
        marginBottom:10
    },
    movieContentContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    containerMovieItem: {
        marginHorizontal:10,
        marginVertical:10
    }
})