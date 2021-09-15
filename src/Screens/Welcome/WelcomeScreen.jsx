import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Container from '../../Components/Containers/Container'
import CText from '../../Components/Text/CText'

class WelcomeScreen extends Component {
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.replace('Index')
        },2000)
    }
    render(){
        return(
            <Container>
                <View style={styles.contentContainer}>
                    <CText style={styles.textSection} size={24} bold>The Movie App</CText>
                </View>
            </Container>
        )
    }
}

export default WelcomeScreen

const styles = StyleSheet.create({
    contentContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    textSection:{
        color:'white',
        fontWeight:'bold'
    }
})