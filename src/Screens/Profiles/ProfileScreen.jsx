import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Container from '../../Components/Containers/Container'
import CText from '../../Components/Text/CText'

class ProfileScreen extends Component {
    render(){
        return(
            <Container>
                <View style={styles.container}>
                    <CText bold>Profile Screen</CText>
                </View>
            </Container>
        )
    }
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})