import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { SliderBox } from 'react-native-image-slider-box'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import AppTab from './AppTab'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                'https://ecs7.tokopedia.net/img/banner/2020/2/23/85531617/85531617_2c250d89-cda0-4319-870a-abd65fc24773.jpg',
                'https://ecs7.tokopedia.net/img/banner/2020/2/23/85531617/85531617_2c250d89-cda0-4319-870a-abd65fc24773.jpg',
                'https://ecs7.tokopedia.net/img/banner/2020/2/23/85531617/85531617_2c250d89-cda0-4319-870a-abd65fc24773.jpg',
                'https://source.unsplash.com/1024x768/?tree',
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <SliderBox
                    ImageComponentStyle={{ borderRadius: 5, width: '88%', height: responsiveHeight(20), marginBottom: responsiveHeight(2.33) }}
                    images={this.state.images}
                    dotColor="green"
                    inactiveDotColor="#90A4AE"
                    onCurrentImagePressed={index =>
                        console.warn(`image ${index} pressed`)
                    }
                    paginationBoxStyle={{
                        position: 'absolute',
                        bottom: responsiveHeight(-1),
                        padding: 0,
                        alignItems: 'center',
                        alignSelf: 'flex-start',
                        justifyContent: 'center',
                        paddingVertical: 10,
                        marginTop: 10
                    }}
                    dotStyle={{
                        width: 6,
                        height: 6,
                        borderRadius: 5,
                        marginHorizontal: responsiveWidth(-1),
                        padding: 0,
                        marginTop: 20,
                        backgroundColor: 'green'
                    }}
                    imageLoadingColor="#2196F3"
                />
                <AppTab />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',

    }
})