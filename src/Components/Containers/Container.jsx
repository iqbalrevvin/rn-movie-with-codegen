import React from 'react'
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native'

const Container = ({children, backgroundColor}) => {
    return(
        <SafeAreaView style={styles.container(backgroundColor)}>
            <StatusBar animated={true} backgroundColor="#15141F" barStyle='light-content'/>
            {children}
        </SafeAreaView>
    )
}

export default React.memo(Container)

const styles = StyleSheet.create({
    container: (backgroundColor) => ({
        flex:1,
        backgroundColor:backgroundColor||'#15141F'
    })
})