import React from 'react'
import { StyleSheet, View, FlatList, Dimensions } from 'react-native'
import CMovieItem from '../../../Components/CMovieItem'
import CLoading from '../../../Components/Loaders/CLoading'
import CText from '../../../Components/Text/CText'

const CRankOneSection = ({navigation, data, loading }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.renderItemContainer}>
                <CMovieItem type={1} title={item.title} image={item.image} containerStyle={styles.containerMovieItem} 
                    onPress={() => navigation.navigate('Detail', {selectedMovie: item})} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <CText color='white' size={20}>Movie With Ranking 1 - 10</CText>
            </View>
            {!loading && (
                <FlatList data={data} keyExtractor={(item) => item.id.toString()}
                    horizontal showsHorizontalScrollIndicator
                    renderItem={renderItem}
                />
            )}
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

export default React.memo(CRankOneSection, compare)