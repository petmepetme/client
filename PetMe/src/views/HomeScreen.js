import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image, StatusBar, ScrollView } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/FontAwesome';

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

                        <View style={styles.viewStory}>
                            <Image
                                style={styles.imageStory}
                                source={{ uri: 'https://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg' }} />
                            <Icon name="plus" size={responsiveFontSize(2)} color="#79B8DA" style={{ marginTop: -7, marginLeft: 20 }} />
                            <Text style={[styles.textName, { marginTop: -5 }]}>Your Story</Text>
                        </View>
                        <View style={styles.viewStory}>
                            <Image
                                style={[styles.imageStory, {
                                    borderWidth: 4,
                                    borderColor: 'pink'
                                }]}
                                source={{ uri: 'https://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg' }} />
                            <Text style={styles.textName}>johdoe</Text>
                        </View>
                        <View style={styles.viewStory}>
                            <Image
                                style={[styles.imageStory, {
                                    borderWidth: 4,
                                    borderColor: 'pink'
                                }]}
                                source={{ uri: 'https://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg' }} />
                            <Text style={styles.textName}>johdoe</Text>
                        </View>
                        <View style={styles.viewStory}>
                            <Image
                                style={[styles.imageStory, {
                                    borderWidth: 4,
                                    borderColor: 'pink'
                                }]}
                                source={{ uri: 'https://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg' }} />
                            <Text style={styles.textName}>johdoe</Text>
                        </View>
                        <View style={styles.viewStory}>
                            <Image
                                style={[styles.imageStory, {
                                    borderWidth: 4,
                                    borderColor: 'pink'
                                }]}
                                source={{ uri: 'https://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg' }} />
                            <Text style={styles.textName}>johdoe</Text>
                        </View>
                        <View style={styles.viewStory}>
                            <Image
                                style={[styles.imageStory, {
                                    borderWidth: 4,
                                    borderColor: 'pink'
                                }]}
                                source={{ uri: 'https://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg' }} />
                            <Text style={styles.textName}>johdoe</Text>
                        </View>
                        <View style={styles.viewStory}>
                            <Image
                                style={[styles.imageStory, {
                                    borderWidth: 4,
                                    borderColor: 'pink'
                                }]}
                                source={{ uri: 'https://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg' }} />
                            <Text style={styles.textName}>johdoe</Text>
                        </View>
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

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    viewNav: {
        flexDirection: 'row',
    },
    viewTextNav: {
        flexDirection: 'row',
        marginLeft: responsiveWidth(2.33),
        justifyContent: 'center',
        marginTop: responsiveHeight(2.33)
    },
    viewIconNav: {
        height: responsiveHeight(7.5),
        backgroundColor: '#4AACA7',
        width: responsiveWidth(78),
        flexDirection: 'row'
    },
    textNews: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.2),
        marginHorizontal: responsiveWidth(0.5)
    },
    lineNav: {
        height: responsiveHeight(0.15),
        backgroundColor: '#DDDDDD',
        width: responsiveWidth(1000),
        marginTop: responsiveHeight(0.2)
    },
    viewSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#DDDDDD',
        height: responsiveHeight(6),
        borderRadius: 5,
        width: responsiveWidth(40),
        justifyContent: 'center',
        marginTop: responsiveHeight(0.5),
        marginLeft: responsiveWidth(1)
    },

    imageIcon: {
        margin: 5,
        height: 15,
        width: 15,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    inputSearch: {
        flex: 1,
        fontSize: responsiveFontSize(1.3),
        justifyContent: 'center'
    },
    viewIconBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: responsiveHeight(1.6),
        marginLeft: responsiveWidth(1.66)
    },
    iconBar: {
        marginHorizontal: responsiveWidth(1)
    },
    viewStory: {
        marginTop: responsiveHeight(0.66),
        marginLeft: responsiveWidth(2.33),
        alignItems: 'center'
    },
    imageStory: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    textName: {
        color: '#000000',
        fontSize: responsiveFontSize(1.8),
    },
    viewCard: {
        flexDirection: 'column',
        marginBottom: responsiveHeight(2)
    },
    viewHead: {
        flexDirection: 'row',
        marginLeft: responsiveWidth(5.3),
        marginTop: responsiveHeight(1.3),
        justifyContent: 'space-between'
    },
    imagePost: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    textPost: {
        color: '#000',
        marginTop: responsiveHeight(1.8),
        marginLeft: responsiveWidth(1),
        fontSize: responsiveFontSize(1.6),
        fontWeight: 'bold'
    },
    iconPost: {
        marginRight: responsiveWidth(5.33),
        marginTop: responsiveHeight(2.3)
    },
    imageBody: {
        width: responsiveWidth(100),
        height: responsiveHeight(50),
        alignSelf: 'center',
        marginTop: responsiveHeight(1.33),
        marginBottom: responsiveHeight(1.33)
    },
    viewFooter: {
        flexDirection: 'row',
        marginLeft: responsiveWidth(5.3),
        marginTop: responsiveHeight(1.3),
        justifyContent: 'space-between'
    },
    iconLove: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    iconComment: {
        marginRight: responsiveWidth(5.33),
        marginTop: responsiveHeight(2.3)
    },
    iconShare: {
        marginRight: responsiveWidth(5.33),
        marginTop: responsiveHeight(2.3)
    },
    imageBody: {
        width: responsiveWidth(100),
        height: responsiveHeight(50),
        alignSelf: 'center',
        marginTop: responsiveHeight(1.33),
        marginBottom: responsiveHeight(1.33)
    },
})