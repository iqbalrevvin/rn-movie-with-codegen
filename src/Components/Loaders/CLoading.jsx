import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import { COLORS } from '../../Services/Constant'

const CLoader = () => {
    return(
        <View>
            <ActivityIndicator size='large' color={COLORS.primary} />
        </View>
    )
}

export default React.memo(CLoader)