import React from 'react'
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native'
import { COLORS, icons, images } from '../../../Services/Constant'

const CHeaderHome = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.profileContainer} onPress={() => alert('Profile Click')}>
                <Image source={images.profile_photo} style={styles.photoProfileSection} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileContainer} onPress={() => alert('Profile Click')}>
                <Image source={icons.airplay} style={styles.airPlaySection} />
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(CHeaderHome)

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:24
    },
    profileContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
    },
    photoProfileSection:{
        width:40,
        height:40,
        borderRadius:20
    },
    airPlaySection:{
        width:25,
        height:25,
        tintColor:COLORS.primary
    }
})