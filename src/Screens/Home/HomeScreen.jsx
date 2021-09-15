import React, {Component} from 'react'
import {StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, 
        Image, ImageBackground, Animated, ScrollView
} from 'react-native'
import Container from '../../Components/Containers/Container'
import CText from '../../Components/Text/CText'
import {icons} from '../../Services/Constant'
import CCarouselSection from './Components/CCarouselSection'
import CContinueWatching from './Components/CContinueWatching'
import CDotSlide from './Components/CDotSlide'
import CHeaderHome from './Components/CHeaderHome'

class HomeScreen extends Component {
    render(){
        return(
            <Container>
                <CHeaderHome />
                <ScrollView contentContainerStyle={styles.headCarouselContainer} >
                    <CCarouselSection {...this.props} />
                    <CContinueWatching {...this.props} />
                </ScrollView>
            </Container>
        )
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    headCarouselContainer:{
        paddingBottom:100
    }
})