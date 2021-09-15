import React, {Component} from 'react'
import {StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity, Alert} from 'react-native'
import Container from '../../Components/Containers/Container'
import CGap from '../../Components/Gap/CGap'
import CText from '../../Components/Text/CText'
import { COLORS } from '../../Services/Constant'
import { getMovie } from './actions'
import COtherMovie from './Components/COtherMovie'
import CRankOneSection from './Components/CRankOneSection'
import CRankTwoSection from './Components/CRankTwoSection'
import CSearchInput from './Components/CSearchInput'
import { dummyRankOneSection, dummyRankTwoSection } from './dummyData'

const {width} = Dimensions.get('window')
class PlaygroundScreen extends Component {
    constructor(){
        super()
        this.state = {
            listCategory: [
                {id:1, name: 'Movies', active:false},
                {id:2, name: 'TV Series', active:false},
                {id:3, name: 'Documentary', active:true},
                {id: 4, name: 'Sports', active:false},
                {id: 5, name: 'Drama', active:false},
                {id: 6, name: 'Cartoons', active:false}
            ],
            moviesData: [],
            dataRankOne: dummyRankOneSection,
            dataRankOneLoading:false,
            dataRankTwo: dummyRankTwoSection,
            dataRankTwoLoading:false,
            dataOtherMovie: dummyRankTwoSection,
            dataOtherMovieLoading: false,
        }
    }

    componentDidMount(){
        // this._handleGetMovieAPI()
    }

    _handleOnClick = (id) => {
        const {listCategory} = this.state
        this.setState({
            listCategory: listCategory.map(item => item.id == id ? {...item, active:true} : {...item, active:false})
        })
    }

    _handleGetMovieAPI = async () => {
        this.setState({dataRankOneLoading:true, dataRankTwoLoading:true})
        try {
            const response = await getMovie()
            if(response?.data?.items){
                this.setState({
                    dataRankOne: response.data.items.slice(0,10),
                    dataRankOneLoading: false,
                    dataRankTwo: response.data.items.slice(11,20),
                    dataRankTwoLoading: false,
                    dataOtherMovie: response.data.items.slice(20,250),
                    dataOtherMovieLoading: false,
                })

            }
        } catch (error) {
            Alert.alert('Error Get Data', 'Failed to load data, try to close the app, clean it from memory then open it again')
            console.log(error)
        }
    }
    
    render(){
        const {listCategory, dataRankOne, dataRankOneLoading, dataRankTwo, dataRankTwoLoading} = this.state
        return(
            <Container>
                <ScrollView>
                    <View style={{ padding:20 }}>
                        <CText size={28} style={{width:width-100, lineHeight: 40, textAlign: 'justify'}}>
                            Find Movies, TV series, and more...
                        </CText>
                    </View>
                    <View style={{ paddingHorizontal:10, marginTop:24 }}>
                        <CSearchInput />
                    </View>
                    {/* <CText>{JSON.stringify(this.state.dataRankOne)}</CText> */}
                    {/* Start:: Movie Category Scroll */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginTop:20 }}>
                        {listCategory.map((item,i) => {
                            return <CategoryItem key={i} name={item.name} active={item.active} onPress={() => this._handleOnClick(item.id)} />
                        })}
                    </ScrollView>
                    {/* End:: Movie Category Scroll */}
                    <CRankOneSection data={dataRankOne} loading={dataRankOneLoading} navigation={this.props.navigation} />
                    <CGap height={20} />
                    <CRankTwoSection data={dataRankTwo} loading={dataRankTwoLoading} navigation={this.props.navigation} />
                    <COtherMovie data={dataRankTwo} loading={dataRankTwoLoading} navigation={this.props.navigation} />
                </ScrollView>
            </Container>
        )
    }
}

const CategoryItem = ({name, active, onPress}) => {
    return(
        <TouchableOpacity style={{ marginRight:15, padding:5 }} onPress={onPress}>
            <CText color={active?COLORS.primary:COLORS.white}>{name}</CText>
            {active && (
                <View style={{ backgroundColor:COLORS.primary, width:24, height:2, marginTop:8 }} />
            )}
        </TouchableOpacity>
    )
}

export default PlaygroundScreen

const styles = StyleSheet.create({
    container:{
        
    },
})