import React from 'react'
import {Image, StyleSheet, TextInput, View} from 'react-native'
import { icons } from '../../../Services/Constant'

const CSearchInput = () => {
    return(
        <View style={styles.container}>
            <Image source={icons.search} style={{ width:25, height:25, tintColor:'white' }} />
            <TextInput placeholder="Sherlock Holmes" placeholderTextColor='#6E6E76' style={styles.textInputSection} />
        </View>
    )
}

export default React.memo(CSearchInput)

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#211F30',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15,
        height:50,
        borderRadius: 20
    },
    textInputSection:{
        color:'#6E6E76',
        fontSize: 16,
        marginLeft:20
    }
})