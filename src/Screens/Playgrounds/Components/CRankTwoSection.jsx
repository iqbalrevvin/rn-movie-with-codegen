import React from 'react'
import { StyleSheet, View, FlatList, Dimensions } from 'react-native'
import CMovieItem from '../../../Components/CMovieItem'
import CLoading from '../../../Components/Loaders/CLoading'
import CText from '../../../Components/Text/CText'

const CRankTwoSection = ({navigation, data, loading}) => {
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <CText color='white' size={20}>Movie With Ranking 11 - 20</CText>
            </View>
          
            {!loading && data.map((item,i) => (
                <View key={i} style={{ padding:20 }}>
                    <CMovieItem type={2} title={item.fullTitle} rating={item.imDbRating} 
                        onPress={() => navigation.navigate('Detail', {selectedMovie: item})}
                        image={item.image} containerStyle={styles.containerMovieItem} 
                        year={item.year} rank={item.rank}
                    />
                </View>
            ))}
            {loading && (
                <View style={{ marginTop:25 }}>
                    <CLoading />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    titleContainer: {
        paddingHorizontal: 20
    },
    renderItemContainer: {
        marginTop: 20,
    },
    containerMovieItem: {
        marginLeft: 20
    }
})

const compare = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}

export default React.memo(CRankTwoSection, compare)