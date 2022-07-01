import * as React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import Favorite from './Favorite'



const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
)

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
)

const ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
)

const initialLayout = { width: Dimensions.get('window').width }

const renderTabBar = props => (
    <TabBar
        {...props}

        indicatorStyle={{ backgroundColor: 'green' }}
        style={{ backgroundColor: 'white', }}
        renderLabel={({ route, focused, color }) => (
            <Text style={{ color: 'black', }}>
                {route.title}
            </Text>
        )}
    />
)


export default function AppTab() {
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        { key: 'first', title: 'New Order' },
        { key: 'second', title: 'Ongoing' },
        { key: 'third', title: 'History' },
    ])

    const renderScene = SceneMap({
        first: Favorite,
        second: SecondRoute,
        third: ThirdRoute
    })

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}

        />
    )
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },


})