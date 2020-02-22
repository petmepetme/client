import React, { Component } from 'react'
import { Text, View, TextInput, Image, StatusBar, ScrollView } from 'react-native'
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/style.HomeScreen';
import StoryHome from '../components/StoryHome';
import StoryPeoplesHome from '../components/StoryPeoplesHome';

export default class HomeScreen extends Component {
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
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}>
                        <StoryHome />
                        <StoryPeoplesHome />
                        <StoryPeoplesHome />
                        <StoryPeoplesHome />
                        <StoryPeoplesHome />
                        <StoryPeoplesHome />
                    </ScrollView>

                    <View style={styles.viewCard}>
                        <View style={styles.viewHead}>
                            <View style={{ flexDirection: 'row', }}>
                                <Image
                                    style={[styles.imagePost, {
                                        borderWidth: 4,
                                        borderColor: 'pink'
                                    }]}
                                    source={{ uri: 'https://djbooth.net/.image/t_share/MTY4NzY3MzI4MDgxNzQ5NTc3/dinah-jane-interview-header.jpg' }} />
                                <Text style={styles.textPost}>Jane Diana</Text>
                            </View>
                            <View>
                                <Icon name="ellipsis-v" size={responsiveFontSize(2.3)} color="#000000" style={styles.iconPost} />

                            </View>
                        </View>
                        <View>
                            <Image
                                style={[styles.imageBody]}
                                source={{ uri: 'https://img.wallpaper.sc/android/images/1080x1920/android-1080x1920-wallpaper_00016.jpg' }} />
                        </View>

                        <View style={styles.viewFooter}>
                            <View style={{ flexDirection: 'row', }}>
                                <Icon name="heart" size={responsiveFontSize(3)} color="red" style={styles.iconBar} />
                                <Icon name="comments" size={responsiveFontSize(3)} color="black" style={styles.iconBar} />
                                <Icon name="send" size={responsiveFontSize(3)} color="black" style={styles.iconBar} />
                            </View>
                            <View>
                                <Icon name="save" size={responsiveFontSize(3)} color="black" style={[styles.iconBar, { marginRight: responsiveWidth(5.33) }]} />
                            </View>
                        </View>
                    </View>
                    {/* Card */}

                    <View style={styles.viewCard}>
                        <View style={styles.viewHead}>
                            <View style={{ flexDirection: 'row', }}>
                                <Image
                                    style={[styles.imagePost, {
                                        borderWidth: 4,
                                        borderColor: 'pink'
                                    }]}
                                    source={{ uri: 'https://djbooth.net/.image/t_share/MTY4NzY3MzI4MDgxNzQ5NTc3/dinah-jane-interview-header.jpg' }} />
                                <Text style={styles.textPost}>Jane Diana</Text>
                            </View>
                            <View>
                                <Icon name="ellipsis-v" size={responsiveFontSize(2.3)} color="#000000" style={styles.iconPost} />

                            </View>
                        </View>
                        <View>
                            <Image
                                style={[styles.imageBody]}
                                source={{ uri: 'https://img.wallpaper.sc/android/images/1080x1920/android-1080x1920-wallpaper_00016.jpg' }} />
                        </View>

                        <View style={styles.viewFooter}>
                            <View style={{ flexDirection: 'row', }}>
                                <Icon name="heart" size={responsiveFontSize(3)} color="red" style={styles.iconBar} />
                                <Icon name="comments" size={responsiveFontSize(3)} color="black" style={styles.iconBar} />
                                <Icon name="send" size={responsiveFontSize(3)} color="black" style={styles.iconBar} />
                            </View>
                            <View>
                                <Icon name="save" size={responsiveFontSize(3)} color="black" style={[styles.iconBar, { marginRight: responsiveWidth(5.33) }]} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        )
    }
}

