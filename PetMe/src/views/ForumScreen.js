import React, { Component } from 'react'
import { Text, View, TextInput, Image, StatusBar, ScrollView } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/style.ForumScreen'
import CardForum from '../components/CardForum';

export default class ForumScreen extends Component {
    render() {
        return (
            <View style={styles.viewContainer}>
                <StatusBar backgroundColor="#FFFFFF" />
                <View style={styles.viewNav}>
                    <View style={styles.viewTextNav}>
                        <Text style={styles.textNews}>News</Text>
                        <Text style={styles.textNews}>|</Text>
                        <Text style={styles.textNews}>Forum</Text>
                    </View>
                    <View style={styles.viewIconNav}>
                        <View style={styles.viewSection}>
                            <Image
                                source={require('../images/search.png')}
                                style={styles.imageIcon}
                            />

                            <TextInput
                                style={styles.inputSearch}
                                placeholder="Cari timbangan digital"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={styles.viewIconBar}>
                            <Icon name="heart" size={responsiveFontSize(3)} color="#FFFFFF" style={styles.iconBar} />
                            <Icon name="envelope" size={responsiveFontSize(3)} color="#FFFFFF" style={styles.iconBar} />
                            <Icon name="bell" size={responsiveFontSize(3)} color="#FFFFFF" style={styles.iconBar} />
                        </View>
                    </View>
                </View>
                <View style={styles.lineNav} />
                <ScrollView>
                    <CardForum />
                    <CardForum />
                    <CardForum />
                    <CardForum />
                    <CardForum />
                    <CardForum />
                </ScrollView>
            </View>

        )
    }
}

