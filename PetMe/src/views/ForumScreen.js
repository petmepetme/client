import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image, StatusBar, ScrollView } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/FontAwesome';

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
                    <View style={styles.viewForum}>
                        <View>
                            <Image
                                style={styles.imageForum}
                                source={{ uri: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg?w=1155&h=1541' }}
                            />
                        </View>
                        <View style={styles.viewTextForum}>
                            <Text style={styles.textTitle}>Telah Ditemukan Anjing Di Depok</Text>
                            <Text style={styles.textDescription}>Kondisi Dalam Keadaan Kritis</Text>
                        </View>
                    </View>
                    <View style={styles.viewForum}>
                        <View>
                            <Image
                                style={styles.imageForum}
                                source={{ uri: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg?w=1155&h=1541' }}
                            />
                        </View>
                        <View style={styles.viewTextForum}>
                            <Text style={styles.textTitle}>Telah Ditemukan Anjing Di Depok</Text>
                            <Text style={styles.textDescription}>Kondisi Dalam Keadaan Kritis</Text>
                        </View>
                    </View>
                    <View style={styles.viewForum}>
                        <View>
                            <Image
                                style={styles.imageForum}
                                source={{ uri: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg?w=1155&h=1541' }}
                            />
                        </View>
                        <View style={styles.viewTextForum}>
                            <Text style={styles.textTitle}>Telah Ditemukan Anjing Di Depok</Text>
                            <Text style={styles.textDescription}>Kondisi Dalam Keadaan Kritis</Text>
                        </View>
                    </View>
                    <View style={styles.viewForum}>
                        <View>
                            <Image
                                style={styles.imageForum}
                                source={{ uri: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg?w=1155&h=1541' }}
                            />
                        </View>
                        <View style={styles.viewTextForum}>
                            <Text style={styles.textTitle}>Telah Ditemukan Anjing Di Depok</Text>
                            <Text style={styles.textDescription}>Kondisi Dalam Keadaan Kritis</Text>
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
    viewTextForum: {
        flex: 1,
        marginLeft: responsiveWidth(2.33),
        marginRight: responsiveWidth(0.8)
    },
    iconBar: {
        marginHorizontal: responsiveWidth(1)
    },
    viewForum: {
        flexDirection: 'row',
        marginLeft: responsiveWidth(2.33),
        marginTop: responsiveHeight(2.33),
        marginBottom: responsiveHeight(1.66),
    },
    imageForum: {
        width: 120,
        height: 120
    },
    textTitle: {
        fontSize: responsiveFontSize(1.8),
        color: '#000000',
        fontWeight: 'bold'
    },
    textDescription: {
        fontSize: responsiveFontSize(1.8),
        color: '#000000',
        marginTop: responsiveHeight(0.33)
    }
})