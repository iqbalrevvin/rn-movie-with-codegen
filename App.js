import React, {Component} from 'react'
import {View, SafeAreaView, Text} from 'react-native'
import Routes from './src/Routes'

class App extends Component {
    render(){
        return(
            <Routes {...this.props} />
        )
    }
}

export default App